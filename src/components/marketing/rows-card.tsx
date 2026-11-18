/**
 * A small piece of interface laid over a photograph (OnPhoto): a title with a
 * tag, a few label/value rows on the tone step, and the orange dot on what it
 * ends with. Decorative (OnPhoto hides it from screen readers): the text beside
 * the picture always says the same thing.
 */
export function RowsCard({
  title,
  tag,
  rows,
  status,
}: {
  title: string;
  tag: string;
  rows: ReadonlyArray<readonly [string, string]>;
  status: string;
}) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-ink text-base font-semibold">{title}</p>
        <p className="text-muted-foreground shrink-0 text-sm whitespace-nowrap">{tag}</p>
      </div>
      <div className="bg-surface-muted mt-3 space-y-2 rounded-lg p-3">
        {rows.map(([label, value]) => (
          <p key={label} className="flex items-baseline gap-4">
            <span className="text-muted-foreground w-20 shrink-0 text-sm">{label}</span>
            <span className="text-ink text-base">{value}</span>
          </p>
        ))}
      </div>
      <p className="text-ink mt-4 flex items-center gap-2 text-sm font-medium">
        <span aria-hidden="true" className="bg-brand size-2.5 shrink-0 rounded-full" />
        {status}
      </p>
    </>
  );
}
