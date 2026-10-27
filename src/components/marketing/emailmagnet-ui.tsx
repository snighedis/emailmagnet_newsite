/**
 * EmailMagnet's popup and its surroundings, rebuilt in HTML from the 2.5.7
 * package (popup.html and styles/main.css): its colours, its confidence badges,
 * its source labels and the columns of its CSV export. These are pictures of the
 * product, so each root is one `role="img"` with a description, and it carries
 * `data-ui` so the product keeps its own small borders and radii.
 *
 * Keep them true to the version live on the store: a label, a control or a
 * column that the store version does not have does not belong here.
 */
import type { ReactNode } from "react";

type Level = "high" | "medium";

type Row = {
  email: string;
  level: Level;
  /** The source summary as the popup prints it: "Email link", "Page text"… */
  source: string;
  score: number;
  /** PRO's all-pages list marks the addresses of the tab you are on. */
  currentTab?: boolean;
  selected?: boolean;
};

const brightside = "brightside-dental-care.com";
const kessler = "kessler-moll-architekten.de";
const harbor = "harbor-pine-studio.com";

/** One contact page: four addresses behind email links, three in the text. */
const contactPageRows: Row[] = [
  { email: `info@${brightside}`, level: "high", source: "Email link", score: 96 },
  { email: `appointments@${brightside}`, level: "high", source: "Email link", score: 95 },
  { email: `billing@${brightside}`, level: "high", source: "Email link", score: 93 },
  { email: `careers@${brightside}`, level: "high", source: "Email link", score: 91 },
  { email: `dr.hartwell@${brightside}`, level: "medium", source: "Page text", score: 64 },
  { email: `manager@${brightside}`, level: "medium", source: "Page text", score: 58 },
  { email: `press@${brightside}`, level: "medium", source: "Page text", score: 52 },
];

const reviewedRows: Row[] = contactPageRows.map((row, i) => ({ ...row, selected: i < 5 }));

/** PRO, sorted by domain: three sites visited, sixteen addresses in one list. */
const allPagesRows: Row[] = [
  { email: `appointments@${brightside}`, level: "high", source: "Email link", score: 95 },
  { email: `info@${brightside}`, level: "high", source: "Email link", score: 96 },
  { email: `hello@${harbor}`, level: "high", source: "Email link", score: 94, currentTab: true },
  { email: `jobs@${harbor}`, level: "medium", source: "Page text", score: 61, currentTab: true },
  { email: `maya.lind@${harbor}`, level: "high", source: "Email link", score: 90, currentTab: true },
  { email: `m.kessler@${kessler}`, level: "medium", source: "Page text", score: 57 },
  { email: `office@${kessler}`, level: "high", source: "Contact page + Email link", score: 97 },
];

function Check({ on }: { on?: boolean }) {
  return (
    <span className={on ? "emui-check emui-check-on" : "emui-check"}>
      {on ? (
        <svg viewBox="0 0 12 12">
          <path d="M2.5 6.2 5 8.6l4.6-5" />
        </svg>
      ) : null}
    </span>
  );
}

function Popup({
  count,
  rows,
  pro,
  sort = "Confidence",
  listHeight,
}: {
  count: number;
  rows: Row[];
  pro?: boolean;
  sort?: string;
  /** Crops the list the way the popup scrolls it. */
  listHeight: number;
}) {
  const selected = rows.filter((row) => row.selected).length;
  const action = selected || count;
  return (
    <div className="emui-popup">
      <div className="emui-head">
        <div className="emui-top">
          <span className="emui-logo">
            <span className="emui-logo-email">Email</span>
            <span className="emui-logo-magnet">Magnet</span>
            {pro ? <span className="emui-pro">PRO</span> : null}
          </span>
          <span className="emui-icons">
            <svg viewBox="0 0 24 24" className="emui-icon-toggle">
              <rect x="2.5" y="7" width="19" height="10" rx="5" />
              <circle cx="16.5" cy="12" r="3" />
            </svg>
            <svg viewBox="0 0 24 24" className="emui-icon-cog">
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M12 2v2M12 22v-2m5-1.34-1-1.73M11 10.27 7 3.34m13.66 13.66-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66-4 6.93" />
            </svg>
          </span>
        </div>
        <div className="emui-counter">
          <span className="emui-count">{count} emails found</span>
          <span className="emui-status">Ready to scan</span>
        </div>
        {pro ? null : <span className="emui-banner">PRO keeps every email from every page in one list ›</span>}
        <div className="emui-controls">
          <span className="emui-autosave">
            <span className="emui-switch" />
            Autosave
          </span>
          <span className="emui-automation">Automation</span>
        </div>
      </div>
      <div className="emui-toolbar">
        <span className="emui-search">Search emails or domains…</span>
        <span className="emui-sort">{sort}</span>
      </div>
      <div className="emui-selectall">
        <span className="emui-selectall-label">
          <Check />
          Select all
        </span>
        <span className="emui-selected">
          {selected} of {count} selected
        </span>
      </div>
      <div className="emui-list" style={{ height: listHeight }}>
        {rows.map((row) => (
          <div key={row.email} className={row.selected ? "emui-row emui-row-on" : "emui-row"}>
            <Check on={row.selected} />
            <span className="emui-row-body">
              <span className={row.currentTab ? "emui-email emui-email-current" : "emui-email"}>{row.email}</span>
              <span className="emui-meta">
                <span className={`emui-badge emui-badge-${row.level}`}>{row.level === "high" ? "High" : "Medium"}</span>
                <span className="emui-source">{row.source}</span>
              </span>
            </span>
            {row.currentTab ? <span className="emui-current">(current tab)</span> : null}
          </div>
        ))}
      </div>
      <div className="emui-foot">
        <div className="emui-foot-buttons">
          <span>
            <span className="emui-button">TXT ({action})</span>
            <span className="emui-button">CSV ({action})</span>
          </span>
          <span className="emui-button">Copy ({action})</span>
        </div>
        <div className="emui-rate">
          <span>
            Please rate EmailMagnet
            <span className="emui-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z" />
                </svg>
              ))}
            </span>
          </span>
          <span className="emui-rate-button">Rate it</span>
        </div>
      </div>
    </div>
  );
}

type Tab = { title: string; letter: string; colour: string };

function Browser({ tabs, active, url, page, popup }: { tabs: Tab[]; active: number; url: string; page: ReactNode; popup: ReactNode }) {
  return (
    <div className="emui-browser">
      <div className="emui-tabs">
        {tabs.map((tab, i) => (
          <span key={tab.title} className={i === active ? "emui-tab emui-tab-on" : "emui-tab"}>
            <span className="emui-favicon" style={{ background: tab.colour }}>
              {tab.letter}
            </span>
            <span className="emui-tab-title">{tab.title}</span>
          </span>
        ))}
      </div>
      <div className="emui-bar">
        <span className="emui-url">{url}</span>
        {/* eslint-disable-next-line @next/next/no-img-element -- a 20px toolbar icon inside a drawn picture */}
        <img src="/brand/emailmagnet-icon-padded.png" alt="" width={20} height={20} className="emui-ext" />
      </div>
      <div className="emui-viewport">
        <div className="emui-page">{page}</div>
        <div className="emui-anchor">{popup}</div>
      </div>
    </div>
  );
}

const brightsideTab: Tab = { title: "Contact | Brightside Dental Care", letter: "B", colour: "#0f766e" };

/**
 * The comparison's picture: a practice's contact page with the popup open on it,
 * seven addresses listed, four from email links and three from the page text.
 */
export function ContactPageScan() {
  const link = (local: string) => <span className="emui-link">{`${local}@${brightside}`}</span>;
  return (
    <div
      data-ui
      role="img"
      aria-label="EmailMagnet open on a dental practice's contact page: 7 emails found, four from email links marked High and three from the page text marked Medium, ready to export as TXT or CSV."
      className="emui"
    >
      <Browser
        tabs={[brightsideTab, { title: "Dentists near Leeds | Directory", letter: "D", colour: "#475569" }]}
        active={0}
        url={`${brightside}/contact`}
        page={
          <>
            <p className="emui-page-title">Contact us</p>
            <p>Write to the right desk and we answer within one working day.</p>
            <dl className="emui-desks">
              <dt>Front desk</dt>
              <dd>{link("info")}</dd>
              <dt>Appointments</dt>
              <dd>{link("appointments")}</dd>
              <dt>Billing</dt>
              <dd>{link("billing")}</dd>
              <dt>Careers</dt>
              <dd>{link("careers")}</dd>
            </dl>
            <p>
              Dr. Emma Hartwell, lead dentist: dr.hartwell@{brightside}. Practice manager: manager@{brightside}.
              Press and partnerships: press@{brightside}.
            </p>
          </>
        }
        popup={<Popup count={7} rows={contactPageRows} listHeight={284} />}
      />
    </div>
  );
}

/**
 * The steps' picture: five of the seven addresses kept, and the CSV they export
 * to, with the four columns the extension writes.
 */
export function ReviewAndExport() {
  const kept = reviewedRows.filter((row) => row.selected);
  return (
    <div
      data-ui
      role="img"
      aria-label="Five of seven emails selected in EmailMagnet, and the exported CSV file open in a spreadsheet with the columns Email Address, Confidence Level, Confidence Score and Sources."
      className="emui emui-review"
    >
      <div className="emui-review-popup">
        <Popup count={7} rows={reviewedRows} listHeight={262} />
      </div>
      <div className="emui-sheet">
        <div className="emui-sheet-title">emails_2026-10-27.csv</div>
        <div className="emui-sheet-scroll">
          <table>
            <thead>
              <tr>
                <th />
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              <tr className="emui-sheet-head">
                <th>1</th>
                <td>Email Address</td>
                <td>Confidence Level</td>
                <td>Confidence Score</td>
                <td>Sources</td>
              </tr>
              {kept.map((row, i) => (
                <tr key={row.email}>
                  <th>{i + 2}</th>
                  <td>{row.email}</td>
                  <td>{row.level}</td>
                  <td className="emui-num">{row.score}</td>
                  <td>{row.source}</td>
                </tr>
              ))}
              {[7].map((n) => (
                <tr key={n}>
                  <th>{n}</th>
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 * PRO's picture: three sites open in three tabs, and one list of everything
 * found on them, sorted by domain, the current tab's addresses marked.
 */
export function OneListAcrossTabs() {
  const link = (local: string) => <span className="emui-link">{`${local}@${harbor}`}</span>;
  return (
    <div
      data-ui
      role="img"
      aria-label="EmailMagnet PRO with three sites open in three tabs: one list of 16 emails from all of them, sorted by domain, with the current tab's emails marked."
      className="emui"
    >
      <Browser
        tabs={[
          brightsideTab,
          { title: "Kontakt | Kessler Moll Architekten", letter: "K", colour: "#334155" },
          { title: "Team | Harbor & Pine Studio", letter: "H", colour: "#1d4ed8" },
        ]}
        active={2}
        url={`${harbor}/team`}
        page={
          <>
            <p className="emui-page-title">The team</p>
            <p>Five people, one studio by the harbour.</p>
            <dl className="emui-desks">
              <dt>Maya Lind, founder</dt>
              <dd>{link("maya.lind")}</dd>
              <dt>New projects</dt>
              <dd>{link("hello")}</dd>
            </dl>
            <p>Want to join us? Send your portfolio to jobs@{harbor}.</p>
          </>
        }
        popup={<Popup count={16} rows={allPagesRows} pro sort="Domain" listHeight={324} />}
      />
    </div>
  );
}
