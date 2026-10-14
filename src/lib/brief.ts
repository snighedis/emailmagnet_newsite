/**
 * The homepage brief: the visitor's own estimate of what one repetitive task
 * costs them today. This is the baseline of the studio's "measured saving"
 * method (CONTEXT.md): the site shows the visitor's own number and never a
 * saving. Pure and deterministic; nothing here touches the network or storage.
 */

/** Answer scales are numbers, identical in every language. */
export const TIMES_PER_WEEK = [1, 5, 10, 20, 40] as const;
export const MINUTES_EACH = [5, 15, 30, 60] as const;
export const WEEKS_PER_MONTH = 52 / 12;

export type BriefAnswers = {
  business?: string;
  task?: string;
  timesPerWeek?: number;
  minutesEach?: number;
};

export type BriefCopyText = {
  hours: { underOne: string; one: string; other: string };
  /** "{times} × {minutes} min × {weeks} settimane" */
  formula: string;
  mail: {
    subject: string;
    intro: string;
    business: string;
    task: string;
    frequency: string;
    baseline: string;
    formula: string;
    method: string;
    more: string;
  };
};

/** Hours per month, unrounded, or null until both numbers are known. */
export function monthlyHours(answers: BriefAnswers): number | null {
  const { timesPerWeek, minutesEach } = answers;
  if (!timesPerWeek || !minutesEach) return null;
  return (timesPerWeek * minutesEach * WEEKS_PER_MONTH) / 60;
}

function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** "circa 11 ore", "1 ora", "meno di un'ora": rounded to whole hours. */
export function formatHours(hours: number, copy: BriefCopyText, lang: string): string {
  if (hours < 1) return copy.hours.underOne;
  const rounded = Math.round(hours);
  const count = new Intl.NumberFormat(lang).format(rounded);
  return fill(rounded === 1 ? copy.hours.one : copy.hours.other, { count });
}

export function formatFormula(answers: BriefAnswers, copy: BriefCopyText, lang: string): string | null {
  if (!answers.timesPerWeek || !answers.minutesEach) return null;
  const nf = new Intl.NumberFormat(lang, { maximumFractionDigits: 2 });
  return fill(copy.formula, {
    times: nf.format(answers.timesPerWeek),
    minutes: nf.format(answers.minutesEach),
    weeks: nf.format(WEEKS_PER_MONTH),
  });
}

/** Plain-text brief, used for both the email body and the clipboard. */
export function briefText(
  answers: BriefAnswers,
  labels: { business?: string; task?: string },
  copy: BriefCopyText,
  lang: string,
): string {
  const hours = monthlyHours(answers);
  const lines = [copy.mail.intro, ""];
  if (labels.business) lines.push(`${copy.mail.business}: ${labels.business}`);
  if (labels.task) lines.push(`${copy.mail.task}: ${labels.task}`);
  if (answers.timesPerWeek && answers.minutesEach) {
    lines.push(
      `${copy.mail.frequency}: ${fill("{times} × {minutes} min", {
        times: String(answers.timesPerWeek),
        minutes: String(answers.minutesEach),
      })}`,
    );
  }
  if (hours !== null) {
    lines.push(`${copy.mail.baseline}: ${formatHours(hours, copy, lang)}`);
    lines.push(`${copy.mail.formula}: ${formatFormula(answers, copy, lang)}`);
  }
  lines.push("", copy.mail.method, "", copy.mail.more, "");
  return lines.join("\n");
}

export function briefMailto(
  to: string,
  answers: BriefAnswers,
  labels: { business?: string; task?: string },
  copy: BriefCopyText,
  lang: string,
): string {
  const hours = monthlyHours(answers);
  const subject = fill(copy.mail.subject, {
    task: labels.task ?? "",
    hours: hours === null ? "" : formatHours(hours, copy, lang),
  });
  const body = briefText(answers, labels, copy, lang);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
