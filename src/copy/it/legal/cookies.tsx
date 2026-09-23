import type { cookies as cookiesEn } from "@/copy/en/legal/cookies";
import { LocaleLink } from "@/i18n/locale-link";

/**
 * Traduzione italiana della Cookie Policy. BOZZA in attesa di revisione
 * legale: in caso di conflitto prevale la versione inglese (vedi Termini).
 */
export const cookies: typeof cookiesEn = {
  meta: {
    title: "Cookie Policy – Dentoku Dev",
    description:
      "Cookie Policy di Dentoku Dev: quali cookie utilizziamo, per quali finalità, e come gestire o revocare il consenso in qualsiasi momento.",
  },
  title: "Cookie Policy",
};

const p = "mt-3 leading-8 text-slate-600";
const p4 = "mt-4 leading-8 text-slate-600";
const h2 = "mt-12 text-2xl font-semibold text-slate-950";
const h3 = "mt-8 text-lg font-semibold text-slate-950";
const a = "underline underline-offset-2";
const th = "pb-3 pr-4 font-semibold";
const td = "py-3 pr-4";

export function CookiesBody() {
  return (
    <>
      <p className="mt-6 leading-8 text-slate-600">
        Ultimo aggiornamento: 15 giugno 2026. La presente Cookie Policy spiega quali cookie e
        tecnologie simili sono utilizzati su dentokudev.com, perché li utilizziamo e come puoi
        gestirli. È redatta ai sensi della Direttiva ePrivacy (2002/58/CE, come modificata dalla
        2009/136/CE), della normativa italiana di attuazione (D.Lgs. 69/2012 e Linee guida del
        Garante per la protezione dei dati personali del 10 giugno 2021) e del GDPR.
      </p>
      <p className={p4}>
        Per informazioni più generali su come trattiamo i dati personali, consulta la nostra{" "}
        <LocaleLink href="/privacy" className={a}>
          Informativa sulla privacy
        </LocaleLink>
        .
      </p>

      <h2 className={h2}>1. Cosa sono i cookie</h2>
      <p className={p}>
        I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un
        sito web. Permettono al sito di ricordare informazioni sulla tua visita (ad esempio la
        lingua preferita o se hai già espresso il consenso) e possono rendere la visita successiva
        più semplice e il sito più utile. Tra le tecnologie simili rientrano il local storage, il
        session storage e i pixel tag; in questa policy li chiamiamo tutti, collettivamente,
        “cookie”.
      </p>

      <h2 className={h2}>2. Cookie che utilizziamo</h2>
      <p className={p}>
        Utilizziamo tre categorie di cookie. I cookie di Analisi e di Marketing richiedono il tuo
        consenso preventivo e vengono installati solo se li attivi nel banner dei cookie; puoi
        accettare o rifiutare ciascuna categoria separatamente e cambiare idea in qualsiasi
        momento.
      </p>

      <h3 className={h3}>a) Cookie strettamente necessari</h3>
      <p className={p}>
        Questi cookie sono indispensabili per il corretto funzionamento del sito e non possono
        essere disattivati. Non raccolgono informazioni utilizzabili a fini di marketing e non
        vengono condivisi con terzi per finalità pubblicitarie. Ai sensi dell’art. 5(3) della
        Direttiva ePrivacy, il loro utilizzo non richiede consenso.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-slate-600">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-900">
              <th className={th}>Nome</th>
              <th className={th}>Finalità</th>
              <th className="pb-3 font-semibold">Durata</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className={`${td} font-mono text-xs`}>cookie-consent</td>
              <td className={td}>
                Memorizza la tua scelta per ciascuna categoria (analisi e marketing attivi o
                disattivi), insieme a una versione e a una data, così il banner non ricompare a
                ogni caricamento di pagina e possiamo dimostrare il consenso espresso.
              </td>
              <td className="py-3">6 mesi, poi ti chiediamo di nuovo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={h3}>b) Cookie di analisi (consenso richiesto)</h3>
      <p className={p}>
        Utilizziamo Google Analytics 4 per raccogliere statistiche anonimizzate su come i visitatori
        usano il sito (pagine visitate, durata della sessione, sorgenti di traffico). Queste
        informazioni ci aiutano a migliorare il sito. I cookie vengono installati solo se attivi
        la categoria Analisi nel banner (con “Accetta tutti” oppure attivando Analisi in
        “Gestisci le preferenze”). Se li rifiuti o chiudi il banner, non viene installato alcun
        cookie di analisi. Utilizziamo anche gli strumenti di analisi di Vercel, rispettosi della
        privacy e senza cookie, che carichiamo ugualmente solo con il tuo consenso alla categoria
        Analisi. Nella stessa categoria rientra la nostra chat di assistenza AI opzionale
        (Chatbase), che può salvare dati locali nel tuo browser per mantenere la sessione della
        chat; si tratta di un assistente basato sull’intelligenza artificiale, come spiegato nella
        nostra{" "}
        <LocaleLink href="/privacy" className={a}>
          Informativa sulla privacy
        </LocaleLink>
        .
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-slate-600">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-900">
              <th className={th}>Nome</th>
              <th className={th}>Fornitore</th>
              <th className={th}>Finalità</th>
              <th className="pb-3 font-semibold">Durata</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className={`${td} font-mono text-xs`}>_ga</td>
              <td className={td}>Google LLC</td>
              <td className={td}>
                Distingue gli utenti unici assegnando un numero generato casualmente come
                identificativo del client.
              </td>
              <td className="py-3">2 anni</td>
            </tr>
            <tr>
              <td className={`${td} font-mono text-xs`}>_ga_*</td>
              <td className={td}>Google LLC</td>
              <td className={td}>Mantiene lo stato della sessione per Google Analytics 4.</td>
              <td className="py-3">2 anni</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={p4}>
        L’anonimizzazione dell’indirizzo IP è attiva. I dati di Google Analytics sono trattati negli
        Stati Uniti sulla base delle Clausole Contrattuali Standard (Decisione 2021/914). Per
        maggiori informazioni consulta l’
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={a}>
          Informativa sulla privacy di Google
        </a>{" "}
        e il{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={a}>
          componente aggiuntivo del browser per la disattivazione di Google Analytics
        </a>
        .
      </p>

      <h3 className={h3}>c) Cookie di marketing (consenso richiesto)</h3>
      <p className={p}>
        Utilizziamo i tag di Google Ads per misurare le conversioni delle nostre campagne
        pubblicitarie (ad esempio quando una visita porta all’installazione di un’estensione o
        all’avvio di un acquisto). Questi cookie sono <strong>disattivati per impostazione
        predefinita</strong> e vengono installati solo se attivi la categoria Marketing nel banner
        dei cookie. Non vendiamo i tuoi dati e non li utilizziamo per la profilazione tra siti
        diversi oltre alla misurazione delle conversioni di Google Ads.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm text-slate-600">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-900">
              <th className={th}>Nome</th>
              <th className={th}>Fornitore</th>
              <th className={th}>Finalità</th>
              <th className="pb-3 font-semibold">Durata</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className={`${td} font-mono text-xs`}>_gcl_au</td>
              <td className={td}>Google LLC</td>
              <td className={td}>
                Utilizzato da Google Ads per memorizzare e tracciare le conversioni attribuite ai
                clic sugli annunci.
              </td>
              <td className="py-3">90 giorni</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={p4}>
        Se non attivi i cookie di Marketing, nessun tag di Google Ads viene caricato. Non
        utilizziamo cookie di profilazione per finalità diverse dalla misurazione delle conversioni
        pubblicitarie descritta sopra.
      </p>

      <h2 className={h2}>3. Come gestire e revocare il consenso</h2>
      <p className={p}>
        Puoi modificare le tue preferenze sui cookie in qualsiasi momento in uno dei seguenti modi:
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
        <li>
          <strong>Link “Preferenze cookie”.</strong> Fai clic su{" "}
          <strong>“Preferenze cookie”</strong> nel footer di qualsiasi pagina. Il pannello del
          consenso si riapre con le tue scelte attuali e puoi attivare o disattivare Analisi e
          Marketing separatamente. Revocare il consenso è semplice quanto darlo. Disattivando una
          categoria la pagina si ricarica, così gli script collegati si fermano subito.
        </li>
        <li>
          <strong>Impostazioni del browser.</strong> Puoi configurare il browser per rifiutare
          tutti o alcuni cookie, o per avvisarti quando un cookie viene installato. Disattivare i
          cookie strettamente necessari può compromettere il funzionamento del sito. Istruzioni per
          i principali browser: Chrome,{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
            target="_blank"
            rel="noopener noreferrer"
            className={a}
          >
            Firefox
          </a>
          , Safari, Edge.
        </li>
        <li>
          <strong>Disattivazione di Google Analytics.</strong> Installa il{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={a}>
            componente aggiuntivo per la disattivazione di Google Analytics
          </a>{" "}
          per impedire la raccolta dei tuoi dati da parte di Google Analytics su tutti i siti.
        </li>
      </ul>
      <p className={p4}>
        La revoca del consenso non pregiudica la liceità dei trattamenti effettuati prima della
        revoca.
      </p>

      <h2 className={h2}>4. Conservazione dei dati dei cookie</h2>
      <p className={p}>
        La durata dei cookie è indicata nelle tabelle precedenti. I report aggregati di analisi
        sono conservati in Google Analytics per un massimo di 26 mesi prima della cancellazione
        automatica. Verifichiamo periodicamente i cookie attivi e rimuoviamo quelli non più
        necessari.
      </p>

      <h2 className={h2}>5. Modifiche alla presente policy</h2>
      <p className={p}>
        Potremo aggiornare questa Cookie Policy quando aggiungiamo o rimuoviamo cookie, o quando la
        legge lo richiede. Le modifiche sostanziali saranno indicate dalla data di{" "}
        <strong>Ultimo aggiornamento</strong> in alto e, ove necessario, il banner dei cookie
        ricomparirà per raccogliere una nuova scelta.
      </p>

      <h2 className={h2}>6. Contatti</h2>
      <p className={p}>
        Per domande su questa Cookie Policy:{" "}
        <a href="mailto:support@dentokudev.com" className={a}>
          support@dentokudev.com
        </a>
        . Hai inoltre il diritto di proporre reclamo al{" "}
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={a}>
          Garante per la protezione dei dati personali
        </a>
        .
      </p>
    </>
  );
}
