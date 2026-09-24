import type { privacy as privacyEn } from "@/copy/en/legal/privacy";
import { LocaleLink } from "@/i18n/locale-link";

/**
 * Traduzione italiana dell'Informativa sulla privacy. BOZZA in attesa di
 * revisione legale: in caso di conflitto prevale la versione inglese.
 */
export const privacy: typeof privacyEn = {
  meta: {
    title: "Informativa sulla privacy – Dentoku Dev",
    description:
      "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.",
  },
  title: "Informativa sulla privacy",
};

const p = "mt-3 leading-8 text-slate-600";
const p4 = "mt-4 leading-8 text-slate-600";
const h2 = "mt-12 text-2xl font-semibold text-slate-950";
const h3 = "mt-8 text-lg font-semibold text-slate-950";
const a = "underline underline-offset-2";
const ul = "mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-600";
const stack = "mt-4 space-y-4 leading-8 text-slate-600";
const Mail = () => (
  <a href="mailto:support@dentokudev.com" className={a}>
    support@dentokudev.com
  </a>
);

export function PrivacyBody() {
  return (
    <>
      <p className="mt-6 leading-8 text-slate-600">
        Ultimo aggiornamento: 24 settembre 2026. La presente Informativa descrive come Dentoku Dev
        (“noi”) tratta i dati personali quando visiti dentokudev.com, acquisti o usi EmailMagnet, o
        ci affidi servizi di consulenza digitale. È resa ai sensi dell’art. 13 del Regolamento (UE)
        2016/679 (“GDPR”) e del Codice in materia di protezione dei dati personali (D.Lgs.
        196/2003, come modificato dal D.Lgs. 101/2018).
      </p>

      <h2 className={h2}>1. Titolare del trattamento</h2>
      <p className={p}>
        Il titolare del trattamento è Dentoku Dev (Nicola Orlandi, ditta individuale), Via Bullona
        8, 20154 Milano, Italia, P.IVA IT13625480960.
      </p>
      <p className={p4}>
        Contatto per le questioni relative alla protezione dei dati: <Mail />. La nomina di un
        Responsabile della protezione dei dati (DPO) non è obbligatoria per le nostre attuali
        attività di trattamento; gestiamo direttamente tutte le richieste in materia di privacy.
      </p>

      <h2 className={h2}>2. Dati personali che trattiamo</h2>
      <p className={p}>
        A seconda di come interagisci con noi, possiamo trattare le seguenti categorie di dati
        personali:
      </p>
      <ul className={ul}>
        <li>
          <strong>Dati identificativi e di contatto</strong>: nome, indirizzo email e (per i
          clienti di consulenza) ragione sociale, partita IVA, indirizzo di fatturazione.
        </li>
        <li>
          <strong>Dati relativi alle transazioni</strong>: registri degli acquisti, chiavi di
          licenza e fatture relative a EmailMagnet PRO o agli incarichi di consulenza.
        </li>
        <li>
          <strong>Dati di pagamento</strong>: trattati per nostro conto da Stripe, Inc.
          (EmailMagnet PRO) e Gumroad, Inc. (ClickPilotAI); non conserviamo numeri completi di
          carte né coordinate bancarie.
        </li>
        <li>
          <strong>Dati di assistenza e comunicazione</strong>: email, messaggi e allegati scambiati
          con il nostro indirizzo di assistenza.
        </li>
        <li>
          <strong>Dati tecnici e di utilizzo</strong>: indirizzo IP, tipo di browser, URL di
          provenienza e log di accesso al server raccolti automaticamente quando visiti il sito.
        </li>
        <li>
          <strong>Cookie e dati di tracciamento</strong>: come descritto nella Sezione 7.
        </li>
      </ul>
      <p className={p4}>
        Non raccogliamo intenzionalmente categorie particolari di dati (art. 9 GDPR) né dati
        relativi a condanne penali. Non trattiamo consapevolmente dati personali di persone di età
        inferiore ai 16 anni; se ritieni che un minore ci abbia fornito dati, contattaci per una
        cancellazione tempestiva.
      </p>

      <h2 className={h2}>3. Finalità e basi giuridiche</h2>
      <p className={p}>
        Trattiamo i dati personali solo in presenza di una base giuridica ai sensi dell’art. 6
        GDPR:
      </p>
      <div className="mt-6 space-y-6">
        <div>
          <p className="font-semibold text-slate-950">
            a) Esecuzione di un contratto (art. 6(1)(b) GDPR)
          </p>
          <p className="mt-2 leading-8 text-slate-600">
            Trattamento di nome, email e dati di fatturazione per fornire l’accesso a EmailMagnet
            PRO, emettere fatture ed eseguire gli incarichi di consulenza digitale che hai
            richiesto. Senza questi dati il servizio non può essere fornito.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-950">
            b) Adempimento di un obbligo di legge (art. 6(1)(c) GDPR)
          </p>
          <p className="mt-2 leading-8 text-slate-600">
            Conservazione delle registrazioni contabili e delle fatture come richiesto dalla
            normativa fiscale e contabile italiana (D.P.R. 633/1972 in materia di IVA; D.P.R.
            600/1973 in materia di imposte sui redditi), per dieci anni dalla data di ciascun
            documento.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-950">
            c) Legittimo interesse (art. 6(1)(f) GDPR)
          </p>
          <p className="mt-2 leading-8 text-slate-600">
            Gestione, protezione e miglioramento del sito e dei servizi; individuazione e
            prevenzione di frodi e abusi; conservazione dei log di accesso al server per finalità
            di sicurezza e di analisi forense (fino a 90 giorni); invio di comunicazioni di
            servizio relative ai tuoi acquisti. I nostri legittimi interessi sono bilanciati con i
            tuoi diritti; puoi opporti come descritto nella Sezione 8.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-950">d) Consenso (art. 6(1)(a) GDPR)</p>
          <p className="mt-2 leading-8 text-slate-600">
            Quando inviamo comunicazioni di marketing facoltative o utilizziamo cookie non
            essenziali, lo facciamo solo sulla base del tuo consenso libero, specifico e informato,
            che puoi revocare in qualsiasi momento senza pregiudicare i trattamenti precedenti.
          </p>
        </div>
      </div>

      <h2 className={h2}>4. Responsabili del trattamento e comunicazione dei dati</h2>
      <p className={p}>
        Non vendiamo, noleggiamo né scambiamo dati personali. Ci avvaliamo delle seguenti
        categorie di responsabili del trattamento, sulla base di accordi scritti sul trattamento
        dei dati:
      </p>
      <ul className={ul}>
        <li>
          <strong>Pagamenti</strong>: Stripe, Inc. (USA) per EmailMagnet PRO; Gumroad, Inc. (USA)
          per ClickPilotAI. Entrambi trattano i dati di fatturazione e di pagamento in base alle
          proprie informative e alle Clausole Contrattuali Standard adottate come responsabili.
        </li>
        <li>
          <strong>Hosting cloud e CDN</strong>: Vercel Inc. (USA), che ospita il sito e le API
          sulla base delle Clausole Contrattuali Standard.
        </li>
        <li>
          <strong>Analisi</strong>: Google LLC (Google Analytics 4, USA), per statistiche
          anonimizzate sull’uso del sito, sulla base delle Clausole Contrattuali Standard e con
          anonimizzazione dell’indirizzo IP.
        </li>
        <li>
          <strong>Chat di assistenza AI</strong>: Chatbase, Inc. (USA), che gestisce il widget
          facoltativo di chat con l’assistente AI. Se apri la chat, i messaggi che invii vengono
          trattati per generare risposte automatiche. Viene caricata solo con il tuo consenso alla
          categoria Analisi, sulla base delle Clausole Contrattuali Standard.
        </li>
        <li>
          <strong>Invio di email</strong>: le email di servizio sono inviate tramite un fornitore
          vincolato da un accordo sul trattamento dei dati e sono usate solo per la consegna delle
          licenze, le risposte dell’assistenza e le comunicazioni di servizio obbligatorie.
        </li>
        <li>
          <strong>Newsletter ed email marketing</strong>: Loops, Inc. (USA), che conserva
          l’indirizzo email inserito nei moduli della newsletter e dei contenuti gratuiti per
          inviarti guide e aggiornamenti sui prodotti, sulla base del tuo consenso. Il trattamento
          avviene sulla base delle Clausole Contrattuali Standard; puoi disiscriverti in qualsiasi
          momento tramite il link presente in ogni email.
        </li>
      </ul>

      <h3 className={h3}>Trasparenza sull’assistente AI (AI Act)</h3>
      <p className={p}>
        Il nostro sito offre una chat di assistenza facoltativa che è un{" "}
        <strong>sistema di intelligenza artificiale</strong>, non un operatore umano. In linea con
        l’articolo 50 del Regolamento (UE) 2024/1689 (AI Act), lo dichiariamo chiaramente prima che
        tu interagisca con essa. Le risposte sono generate automaticamente e possono essere
        inesatte o incomplete; non costituiscono consulenza professionale o legale né impegni
        vincolanti. Non condividere dati personali sensibili nella chat e scrivi a <Mail /> per
        qualsiasi questione importante. L’assistente non prende decisioni automatizzate che
        producano effetti giuridici o effetti analogamente significativi nei tuoi confronti (art. 22
        GDPR).
      </p>
      <p className={p4}>
        Possiamo inoltre comunicare dati alle autorità pubbliche quando richiesto dalla legge o da
        un provvedimento giudiziario, o per tutelare i nostri diritti.
      </p>

      <h2 className={h2}>5. Trasferimenti internazionali</h2>
      <p className={p}>
        Alcuni dei responsabili elencati sopra hanno sede negli Stati Uniti, che non beneficiano di
        una decisione di adeguatezza per tutti i casi di trasferimento. I trasferimenti sono
        coperti dalle Clausole Contrattuali Standard adottate dalla Commissione europea (Decisione
        2021/914) e, ove applicabile, dal Data Privacy Framework UE-USA. Puoi richiedere copia delle
        garanzie applicabili scrivendo a <Mail />.
      </p>

      <h2 className={h2}>6. Tempi di conservazione</h2>
      <div className={stack}>
        <p>
          <strong>Registrazioni di acquisti e fatturazione</strong>: 10 anni dalla data della
          transazione, come richiesto dalla normativa fiscale italiana.
        </p>
        <p>
          <strong>Corrispondenza di assistenza</strong>: fino alla chiusura della richiesta e per
          ulteriori 2 anni per il controllo della qualità; successivamente cancellata, salvo
          contenzioso in corso.
        </p>
        <p>
          <strong>Registrazioni dei consensi al marketing</strong>: fino alla revoca del consenso,
          più 1 anno per dimostrarne la validità.
        </p>
        <p>
          <strong>Log del server del sito</strong>: fino a 90 giorni, poi cancellati
          automaticamente.
        </p>
        <p>
          <strong>Documentazione degli incarichi di consulenza</strong>: 5 anni dalla conclusione
          del progetto, salvo una conservazione più lunga necessaria per controversie legali o
          garanzie contrattuali.
        </p>
      </div>

      <h2 className={h2}>7. Cookie e tracciamento</h2>
      <p className={p}>
        Utilizziamo cookie strettamente necessari per il funzionamento del sito (gestione della
        sessione, sicurezza). Con il tuo consenso utilizziamo anche cookie di analisi (Google
        Analytics 4) per comprendere l’andamento aggregato del traffico. Non utilizziamo cookie
        per pubblicità comportamentale. Puoi gestire o revocare il consenso ai cookie in qualsiasi
        momento dal banner dei cookie o dalle impostazioni del browser. Per informazioni
        dettagliate consulta la nostra{" "}
        <LocaleLink href="/cookies" className={a}>
          Cookie Policy
        </LocaleLink>
        .
      </p>

      <h2 className={h2}>8. I tuoi diritti</h2>
      <p className={p}>
        Ai sensi del GDPR (artt. 15-22) e, per i residenti in Italia, del Codice privacy, hai i
        seguenti diritti sui tuoi dati personali:
      </p>
      <ul className={ul}>
        <li>
          <strong>Diritto di accesso (art. 15)</strong>: ottenere conferma che sia in corso un
          trattamento dei tuoi dati e riceverne copia.
        </li>
        <li>
          <strong>Diritto di rettifica (art. 16)</strong>: chiedere la correzione di dati inesatti
          o incompleti.
        </li>
        <li>
          <strong>Diritto alla cancellazione o “diritto all’oblio” (art. 17)</strong>: chiedere la
          cancellazione dei tuoi dati quando non esiste più una base legittima per conservarli.
        </li>
        <li>
          <strong>Diritto di limitazione (art. 18)</strong>: chiedere che il trattamento sia
          limitato in determinate circostanze.
        </li>
        <li>
          <strong>Diritto alla portabilità (art. 20)</strong>: ricevere i tuoi dati in un formato
          strutturato e leggibile da dispositivo automatico, quando il trattamento si basa sul
          consenso o su un contratto.
        </li>
        <li>
          <strong>Diritto di opposizione (art. 21)</strong>: opporti in qualsiasi momento al
          trattamento basato sul legittimo interesse o al marketing diretto.
        </li>
        <li>
          <strong>Diritto di revocare il consenso (art. 7(3))</strong>: quando il trattamento si
          basa sul consenso, revocarlo in qualsiasi momento senza pregiudicare la liceità dei
          trattamenti precedenti.
        </li>
        <li>
          <strong>Diritti relativi al processo decisionale automatizzato (art. 22)</strong>: non
          prendiamo decisioni con effetti giuridici o effetti analogamente significativi basate
          unicamente su un trattamento automatizzato.
        </li>
      </ul>
      <p className={p4}>
        Per esercitare uno qualsiasi di questi diritti, scrivi a <Mail /> fornendo dettagli
        sufficienti a identificare la tua richiesta. Risponderemo entro 30 giorni (prorogabili di
        ulteriori 60 giorni per le richieste complesse, con comunicazione motivata). Non applichiamo
        costi per le richieste ragionevoli.
      </p>
      <p className={p4}>
        Se ritieni che i tuoi diritti non siano stati rispettati, hai il diritto di proporre reclamo
        all’autorità di controllo italiana, il{" "}
        <strong>Garante per la protezione dei dati personali</strong>, Piazza di Monte Citorio 121,
        00186 Roma, tel. +39 06 696771,{" "}
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={a}>
          garanteprivacy.it
        </a>
        . Puoi inoltre proporre reclamo all’autorità di controllo del tuo Paese di residenza
        nell’UE.
      </p>

      <h2 className={h2}>9. Misure di sicurezza</h2>
      <p className={p}>
        Adottiamo misure tecniche e organizzative adeguate ai sensi dell’art. 32 GDPR, tra cui
        HTTPS/TLS per i dati in transito, controlli di accesso e revisione periodica delle attività
        di trattamento. In caso di violazione dei dati personali suscettibile di presentare un
        rischio elevato per i tuoi diritti e le tue libertà, te ne daremo comunicazione senza
        ingiustificato ritardo, come previsto dall’art. 34 GDPR.
      </p>

      <h2 className={h2}>10. Modifiche alla presente Informativa</h2>
      <p className={p}>
        Possiamo rivedere questa Informativa per riflettere modifiche alle nostre attività di
        trattamento, alla normativa applicabile o alle indicazioni delle autorità di controllo. Le
        modifiche sostanziali saranno comunicate via email agli utenti attivi o con un avviso in
        questa pagina almeno 30 giorni prima dell’entrata in vigore. La data di{" "}
        <strong>Ultimo aggiornamento</strong> in cima alla pagina indica la versione in vigore.
      </p>

      <h2 className={h2}>11. Estensione per browser EmailMagnet</h2>
      <p className={p}>
        Questa sezione descrive come l’estensione per browser EmailMagnet (“l’estensione”) tratta i
        dati, in aggiunta alle pratiche generali descritte sopra.
      </p>
      <div className={stack}>
        <p>
          <strong>Unica finalità.</strong> L’estensione ha un solo scopo: rilevare ed estrarre
          indirizzi email pubblicamente visibili dalle pagine web che scegli di analizzare.
        </p>
        <p>
          <strong>A cosa accede l’estensione.</strong> Quando fai clic per analizzare una pagina,
          o avvii la funzione di automazione su un elenco di URL che fornisci tu, l’estensione legge
          il contenuto di quella pagina al solo scopo di individuare indirizzi email. Non legge le
          pagine che non analizzi attivamente e non monitora la tua navigazione in generale.
        </p>
        <p>
          <strong>Dati raccolti e dove finiscono.</strong>
        </p>
      </div>
      <ul className={ul}>
        <li>
          Gli indirizzi email estratti e l’URL della pagina in cui sono stati trovati sono salvati
          solo nel tuo browser (
          <code className="rounded bg-slate-100 px-1 text-sm">chrome.storage</code>). Non vengono
          mai inviati a noi né ad altri. L’impostazione Autosave decide se i risultati delle pagine
          che visiti restano nella cronologia del browser o se viene conservata solo la pagina
          corrente.
        </li>
        <li>
          Il tuo token di attivazione PRO viene inviato al nostro backend per verificare la licenza
          e gestire il pagamento tramite Stripe, Inc.
        </li>
      </ul>
      <div className={stack}>
        <p>
          <strong>Statistiche d’uso anonime.</strong> Per capire come viene usata l’estensione e
          dove gli utenti si bloccano, EmailMagnet invia eventi d’uso anonimi al nostro backend
          (ospitato da Vercel Inc., USA). Un evento registra solo quale azione è avvenuta (ad
          esempio che l’estensione è stata installata, che il popup è stato aperto, che un’analisi
          ha trovato risultati o che è stata visualizzata la pagina di upgrade), insieme alla
          versione dell’estensione, alla lingua dell’interfaccia del tuo browser e a un
          identificativo casuale generato al momento dell’installazione. Tale identificativo non è
          derivato da te né dal tuo dispositivo ed è usato solo per contare le installazioni
          distinte. Questi eventi non includono mai URL di pagine, indirizzi email estratti,
          contenuti delle pagine o dati personali. Non usiamo servizi di analisi di terze parti e
          non vendiamo né condividiamo questi dati.
        </p>
        <p>
          Puoi disattivare le statistiche d’uso in qualsiasi momento nelle Impostazioni
          dell’estensione, alla voce <strong>Privacy</strong>. Da quel momento non viene inviato
          nulla e gli eventi eventualmente ancora in attesa di invio vengono scartati.
        </p>
        <p>
          <strong>Questionario di disinstallazione.</strong> Quando rimuovi EmailMagnet, Chrome apre
          un breve questionario facoltativo ospitato su Google Moduli. Ti chiede perché hai rimosso
          l’estensione, e il numero di versione dell’estensione viene compilato automaticamente
          così sappiamo a quale versione si riferisce la tua risposta. Non viene incluso nient’altro
          su di te o sul tuo browser. Se scegli di lasciare il tuo indirizzo email, lo usiamo solo
          per contattarti per una breve call di feedback e per inviarti la licenza gratuita offerta
          nel questionario. Non lo usiamo per il marketing e non lo condividiamo. Puoi chiederci di
          cancellarlo in qualsiasi momento scrivendo a <Mail />.
        </p>
        <p>
          <strong>Cosa l’estensione NON fa.</strong> Non raccoglie la tua cronologia di navigazione
          oltre alle pagine che analizzi attivamente; non registra tasti premuti, password, dati
          inseriti nei moduli o contenuti delle pagine estranei al rilevamento delle email; non
          contiene tracker pubblicitari o di analisi di terze parti e non carica codice remoto; gli
          unici dati d’uso raccolti sono le statistiche anonime e di prima parte descritte sopra.
        </p>
        <p>
          <strong>Uso limitato.</strong> I dati gestiti dall’estensione sono usati solo per fornirti
          la funzione di estrazione delle email. Non li vendiamo, non li usiamo per la pubblicità e
          non li trasferiamo a terzi diversi dai fornitori strettamente necessari al funzionamento
          della funzione (hosting e invio delle email di servizio), che agiscono come nostri
          responsabili del trattamento.
        </p>
        <p>
          <strong>Dati di terzi che estrai.</strong> Gli indirizzi email che estrai appartengono a
          terzi. Sei titolare del trattamento per l’uso che ne fai successivamente e sei
          responsabile del rispetto della normativa applicabile (compresi il GDPR e le leggi
          antispam come il CAN-SPAM Act) quando li contatti.
        </p>
        <p>
          <strong>Conservazione e cancellazione.</strong> I risultati salvati possono essere cancellati in
          qualsiasi momento dall’estensione. La disinstallazione dell’estensione li rimuove tutti.
        </p>
        <p>
          <strong>Autorizzazioni.</strong> L’estensione richiede l’accesso alla scheda attiva e la
          possibilità di eseguire script, per analizzare su richiesta la pagina corrente; l’accesso
          al dominio del nostro backend, per salvare i risultati e verificare la licenza; e, solo se
          avvii la funzione di automazione, l’accesso facoltativo ai siti del tuo elenco.
        </p>
      </div>

      <h2 className={h2}>12. Estensione per browser ClickPilot AI</h2>
      <p className={p}>
        Questa sezione descrive come l’estensione per browser ClickPilot AI tratta i dati. Il suo
        flusso di dati è diverso da quello di EmailMagnet, perché il testo che elabori non arriva
        mai a noi.
      </p>
      <div className={stack}>
        <p>
          <strong>Cosa fa.</strong> ClickPilot AI è un sistema di intelligenza artificiale che
          lavora nei campi di testo del tuo browser: può correggere, riscrivere, riassumere,
          tradurre ed eseguire scorciatoie personalizzate sul testo che selezioni.
        </p>
        <p>
          <strong>Dove va il tuo testo.</strong> L’estensione usa la tua chiave API di OpenAI
          (BYOK). Quando esegui un’azione, il testo selezionato viene inviato dal tuo browser
          direttamente a OpenAI, con il tuo account OpenAI e in base al tuo accordo con OpenAI,
          L.L.C. Non passa dai nostri server e non lo riceviamo, conserviamo o trattiamo mai. Per
          questo flusso di dati sei tu a decidere cosa inviare, e OpenAI agisce in base ai propri
          termini e alla propria informativa, non come nostro responsabile del trattamento.
        </p>
        <p>
          <strong>Cosa riceviamo.</strong> L’acquisto della licenza PRO è gestito da Gumroad, Inc.
          e noi conserviamo i relativi dati di acquisto e di licenza, come descritto nelle Sezioni 2
          e 4. La tua chiave API di OpenAI è salvata localmente nel tuo browser e non ci viene mai
          trasmessa.
        </p>
        <p>
          <strong>Trasparenza sull’AI.</strong> I contenuti sono generati da un sistema di
          intelligenza artificiale e possono essere inesatti, incompleti o distorti. Rivedili e
          modificali prima di inviare o pubblicare qualsiasi cosa. Non costituiscono consulenza
          professionale o legale né impegni vincolanti, e l’estensione non prende decisioni
          automatizzate che producano effetti giuridici o effetti analogamente significativi nei
          tuoi confronti (art. 22 GDPR).
        </p>
        <p>
          <strong>La tua responsabilità su ciò che elabori.</strong> Se usi l’estensione su testi
          che contengono dati personali di altre persone, sei tu a decidere di inviarli a OpenAI con
          il tuo account, e sei responsabile di avere una base giuridica per farlo.
        </p>
      </div>

      <h2 className={h2}>13. Contatti</h2>
      <p className={p}>
        Per tutte le richieste, i reclami e le domande in materia di privacy: <Mail />. Ci
        impegniamo a confermare la ricezione delle richieste entro 5 giorni lavorativi.
      </p>
    </>
  );
}
