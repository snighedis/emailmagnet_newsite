import Link from "next/link";
import type { terms as termsEn } from "@/copy/en/legal/terms";

/**
 * Traduzione italiana dei Termini di servizio. BOZZA in attesa di revisione
 * legale: la clausola "Lingua" (sez. 15) fa prevalere la versione inglese.
 * Quando un avvocato avrà approvato la traduzione, si potrà reintrodurre la
 * prevalenza dell'italiano per i consumatori.
 */
export const terms: typeof termsEn = {
  meta: {
    title: "Termini di servizio – Dentoku Dev",
    description:
      "Termini che regolano l’accesso a EmailMagnet e ai servizi di Dentoku Dev: fatturazione, uso consentito, diritto di recesso e legge italiana applicabile.",
  },
  title: "Termini di servizio",
};

const p = "mt-3 leading-8 text-slate-600";
const p4 = "mt-4 leading-8 text-slate-600";
const h2 = "mt-12 text-2xl font-semibold text-slate-950";
const a = "underline underline-offset-2";
const ul = "mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-600";
const Mail = () => (
  <a href="mailto:support@dentokudev.com" className={a}>
    support@dentokudev.com
  </a>
);

export function TermsBody() {
  return (
    <>
      <p className="mt-6 leading-8 text-slate-600">
        Ultimo aggiornamento: 23 settembre 2026. I presenti Termini di servizio (i “Termini”)
        costituiscono un accordo vincolante tra te (l’“Utente” o il “Cliente”) e Dentoku Dev
        (Nicola Orlandi, ditta individuale, Via Bullona 8, 20154 Milano, Italia, P.IVA
        IT13625480960) (“Dentoku Dev”, “noi”) e regolano l’accesso e l’uso di EmailMagnet, di
        questo sito web e di qualsiasi servizio di consulenza digitale da noi fornito.
      </p>
      <p className={p4}>
        Creando un account, completando un acquisto o affidandoci un servizio di consulenza,
        confermi di aver letto, compreso e accettato i presenti Termini. Se agisci per conto di una
        società o di un altro ente, garantisci di avere il potere di vincolarlo.
      </p>

      <h2 className={h2}>1. Servizi</h2>
      <p className={p}>Dentoku Dev fornisce due categorie di servizi:</p>
      <ul className={ul}>
        <li>
          <strong>Prodotti software</strong>: estensioni per browser e applicazioni pubblicate
          sugli store da Dentoku Dev, attualmente EmailMagnet, ClickPilot AI, Volume Control PRO e
          Countdown321. Ciascuno è offerto alle condizioni indicate nella propria pagina prodotto e
          nella propria scheda sullo store al momento dell’acquisto. Quando un prodotto prevede un
          livello a pagamento, questo è un acquisto una tantum con accesso a vita alle funzionalità
          descritte al momento dell’acquisto, ad eccezione di Countdown321, fatturato come
          abbonamento ricorrente tramite lo Shopify App Store.
        </li>
        <li>
          <strong>ClickPilot AI in particolare</strong> è un sistema di intelligenza artificiale.
          Richiede che tu fornisca la tua chiave API di OpenAI, e l’uso di tale chiave è regolato
          dal tuo accordo separato con OpenAI, L.L.C. Gli eventuali costi di utilizzo addebitati da
          OpenAI sono a tuo carico e non fanno parte del prezzo che paghi a noi. Vedi la Sezione 10
          per le conseguenze sulle garanzie.
        </li>
        <li>
          <strong>Consulenza digitale</strong>: servizi di strategia, implementazione e
          consulenza per piccole e medie imprese, forniti in base a un accordo di incarico o a una
          proposta scritta separata (“SOW”) accettata da entrambe le parti. In caso di conflitto tra
          uno SOW e i presenti Termini, per quell’incarico prevale lo SOW.
        </li>
      </ul>

      <h2 className={h2}>2. Requisiti</h2>
      <p className={p}>
        Devi avere almeno 18 anni (o la maggiore età prevista nel tuo ordinamento) e piena
        capacità di agire per concludere un contratto. Se acquisti per conto di un’impresa,
        dichiari che l’impresa è regolarmente costituita e che sei autorizzato a vincolarla. I
        nostri servizi non sono rivolti a consumatori di età inferiore ai 16 anni.
      </p>

      <h2 className={h2}>3. Account e accesso</h2>
      <p className={p}>
        Quando è richiesta la creazione di un account, sei responsabile della riservatezza delle
        tue credenziali e di tutte le attività svolte con il tuo account. Devi informarci
        immediatamente all’indirizzo <Mail /> se sospetti un accesso non autorizzato. Non siamo
        responsabili delle perdite causate dalla mancata custodia delle tue credenziali.
      </p>

      <h2 className={h2}>4. Prezzi, fatturazione e imposte</h2>
      <p className={p}>
        I prezzi sono indicati in USD, salvo diversa indicazione al momento del pagamento. L’IVA
        italiana o altre imposte applicabili possono essere aggiunte dal gestore dei pagamenti in
        base al tuo luogo di fatturazione. Il totale dovuto, comprensivo di imposte, è mostrato
        prima della conferma dell’acquisto. I pagamenti di EmailMagnet PRO sono gestiti da Stripe,
        Inc.; quelli di ClickPilotAI da Gumroad, Inc. Completando il pagamento accetti anche i
        termini e l’informativa sulla privacy del gestore dei pagamenti interessato.
      </p>
      <p className={p4}>
        <strong>EmailMagnet PRO: accesso a vita.</strong> Un pagamento una tantum ti concede una
        licenza perpetua, non esclusiva e non trasferibile per l’uso delle funzionalità di
        EmailMagnet PRO così come esistono al momento dell’acquisto e come continueremo a
        svilupparle. “A vita” significa per tutto il tempo in cui gestiremo EmailMagnet come
        prodotto; se decidessimo di interromperlo definitivamente, daremo un ragionevole
        preavviso (almeno 60 giorni).
      </p>
      <p className={p4}>
        <strong>Compensi per la consulenza.</strong> Tariffe, milestone e scadenze di pagamento
        degli incarichi di consulenza sono stabilite nello SOW applicabile. Salvo diverso accordo,
        le fatture sono pagabili entro 30 giorni dall’emissione. Sui pagamenti tardivi maturano gli
        interessi al tasso previsto dal D.Lgs. 231/2002 (normativa italiana sui ritardi di
        pagamento nelle transazioni commerciali tra imprese).
      </p>
      <p className={p4}>
        Ci riserviamo il diritto di modificare i prezzi per i nuovi acquisti. I titolari di una
        licenza a vita già acquistata non sono interessati dalle variazioni di prezzo.
      </p>

      <h2 className={h2}>5. Diritto di recesso (acquisti dei consumatori)</h2>
      <p className={p}>
        Se sei un <strong>consumatore</strong> (una persona fisica che agisce per scopi estranei
        all’attività imprenditoriale, commerciale, artigianale o professionale) residente
        nell’Unione europea, hai normalmente diritto di recedere dai contratti a distanza entro 14
        giorni ai sensi del D.Lgs. 206/2005 (Codice del Consumo) e della Direttiva 2011/83/UE.
      </p>
      <p className={p4}>
        Per i <strong>contenuti digitali non forniti su un supporto materiale</strong> (come la
        consegna della licenza di EmailMagnet PRO), accetti espressamente, prima di completare
        l’acquisto, che l’esecuzione del contratto inizi immediatamente alla conferma del
        pagamento e che di conseguenza <strong>rinunci al diritto di recesso</strong> ai sensi
        dell’art. 16, lett. m), della Direttiva 2011/83/UE e dell’art. 59, comma 1, lett. o), del D.Lgs.
        206/2005. Questa rinuncia è presentata in modo chiaro e confermata nel processo di
        pagamento prima del pagamento stesso.
        {/* Citations corrected in both languages on 2026-09-23 (they were swapped): flagged for legal review. */}
      </p>
      <p className={p4}>
        Se la rinuncia non è stata acquisita correttamente, o se hai un reclamo legittimo relativo
        a un prodotto difettoso, contattaci all’indirizzo <Mail /> e valuteremo il tuo caso
        tempestivamente. Offriamo inoltre un <strong>rimborso soddisfatti entro 30 giorni</strong>{" "}
        come cortesia commerciale per il primo acquisto, a nostra discrezione.
      </p>

      <h2 className={h2}>6. Uso consentito</h2>
      <p className={p}>Ti impegni a non:</p>
      <ul className={ul}>
        <li>
          usare EmailMagnet o qualsiasi servizio di Dentoku Dev per raccogliere, trattare o
          trasmettere dati personali in violazione della normativa sulla privacy applicabile,
          compresi il GDPR, il Codice privacy italiano, il CAN-SPAM Act, la CASL o altre leggi
          antispam applicabili;
        </li>
        <li>
          usare mezzi automatizzati per acquisire, raccogliere o estrarre dati in modo da violare i
          termini di servizio di piattaforme terze, superare l’accesso autorizzato o configurare un
          trattamento illecito di dati;
        </li>
        <li>
          rivendere, concedere in sublicenza, decompilare o creare opere derivate da qualsiasi
          software di Dentoku Dev senza consenso scritto espresso;
        </li>
        <li>
          tentare di eludere le misure tecniche di protezione, accedere ad aree riservate o
          interferire con il funzionamento della nostra infrastruttura;
        </li>
        <li>
          usare i servizi per molestie, contatti abusivi, diffusione di malware o per qualsiasi
          scopo illecito.
        </li>
      </ul>
      <p className={p4}>
        Sei l’unico responsabile della conformità del tuo uso dei servizi a tutte le leggi a te
        applicabili, comprese quelle sulla protezione dei dati, sulle comunicazioni elettroniche e
        sulla tutela dei consumatori. Non siamo responsabili delle tue violazioni.
      </p>

      <h2 className={h2}>7. Proprietà intellettuale</h2>
      <p className={p}>
        Tutti i diritti di proprietà intellettuale sul software EmailMagnet, sul sito web, sul
        marchio e sulla documentazione appartengono a Dentoku Dev o le sono concessi in licenza, e
        sono tutelati dalla normativa italiana e internazionale sul diritto d’autore (L. 633/1941 e
        Direttiva 2009/24/CE sulla tutela giuridica dei programmi per elaboratore). I presenti
        Termini ti concedono una licenza limitata d’uso dei servizi; non trasferiscono alcuna
        proprietà.
      </p>
      <p className={p4}>
        <strong>Deliverable della consulenza.</strong> Salvo diversa previsione dello SOW
        applicabile, la proprietà intellettuale dei deliverable realizzati per i clienti di
        consulenza passa al cliente al ricevimento del pagamento integrale. Dentoku Dev conserva
        una licenza non esclusiva per usare tali deliverable a fini di portfolio e di case study
        (escluse le informazioni riservate), salvo opposizione scritta del cliente.
      </p>

      <h2 className={h2}>8. Riservatezza</h2>
      <p className={p}>
        Ciascuna parte si impegna a mantenere riservata qualsiasi informazione non pubblica
        comunicata dall’altra parte nell’ambito degli incarichi di consulenza che sia indicata come
        riservata o che una persona ragionevole considererebbe tale date le circostanze. Le
        informazioni riservate possono essere comunicate solo al personale che ne ha bisogno per
        svolgere l’incarico e non possono essere usate per altri scopi. L’obbligo sopravvive per 3
        anni alla cessazione del rapporto. Non si applica alle informazioni che sono o diventano
        pubbliche senza colpa della parte ricevente, o che devono essere comunicate per legge o
        per ordine dell’autorità giudiziaria (con tempestivo avviso alla parte che le ha
        comunicate, ove consentito).
      </p>

      <h2 className={h2}>9. Disponibilità del servizio</h2>
      <p className={p}>
        Puntiamo a un’elevata disponibilità ma non garantiamo un accesso ininterrotto. Possiamo
        effettuare manutenzioni programmate, applicare aggiornamenti di sicurezza o modificare
        funzionalità senza preavviso quando l’urgenza lo richiede. Cercheremo di comunicare in
        anticipo le interruzioni programmate. Le piattaforme di terzi (store di estensioni per
        browser, gestori dei pagamenti) operano in modo indipendente; interruzioni o modifiche
        delle loro policy sono al di fuori del nostro controllo.
      </p>

      <h2 className={h2}>10. Garanzie ed esclusioni</h2>
      <p className={p}>
        Garantiamo che EmailMagnet funzionerà in modo sostanzialmente conforme alla documentazione
        pubblicata per 90 giorni dall’acquisto iniziale. Per i servizi di consulenza garantiamo che
        il lavoro sarà svolto con ragionevole competenza e diligenza.
      </p>
      <p className={p4}>
        Salvo quanto indicato sopra e nella misura massima consentita dalla legge applicabile, i
        servizi sono forniti “così come sono” e “come disponibili”, senza garanzie di
        commerciabilità, idoneità a uno scopo particolare o non violazione di diritti di terzi. Non
        garantiamo che i servizi siano privi di errori né che i risultati ottenuti soddisfino le tue
        esigenze. Nulla nei presenti Termini esclude o limita le garanzie che non possono essere
        escluse in base alla normativa italiana inderogabile a tutela dei consumatori.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-slate-950">
        Contenuti generati dall’intelligenza artificiale (ClickPilot AI)
      </h3>
      <p className={p}>
        ClickPilot AI produce testo tramite un modello di intelligenza artificiale. I contenuti
        sono generati automaticamente e possono risultare inesatti, incompleti, non aggiornati,
        distorti o non adatti al tuo scopo, anche quando appaiono sicuri e ben scritti. Non
        forniamo alcuna garanzia sull’accuratezza, la qualità, l’originalità o l’idoneità a
        qualsiasi scopo dei contenuti generati.
      </p>
      <p className={p4}>
        Resti responsabile di rivedere e modificare i contenuti prima di inviarli, pubblicarli o
        farvi affidamento in altro modo, e delle conseguenze di tali azioni. Ciò include verificare
        che il risultato sia accurato, che non violi diritti altrui e che il suo invio rispetti
        ogni legge o obbligo professionale a te applicabile.
      </p>
      <p className={p4}>
        La generazione è eseguita da OpenAI con la tua chiave API e in base al tuo accordo con
        OpenAI. Non controlliamo quel modello, la sua disponibilità, i suoi prezzi o i contenuti
        che restituisce, e non siamo responsabili delle sue modifiche né delle interruzioni del
        servizio OpenAI. Il testo che elabori viene inviato dal tuo browser a OpenAI e non passa
        dai nostri server.
      </p>

      <h2 className={h2}>11. Limitazione di responsabilità</h2>
      <p className={p}>
        Nella misura massima consentita dalla legge applicabile, la responsabilità complessiva di
        Dentoku Dev nei tuoi confronti per qualsiasi pretesa derivante dai presenti Termini o ad
        essi connessa, di natura contrattuale, extracontrattuale o di altro tipo, è limitata al
        maggiore tra: (a) l’importo che ci hai pagato nei 12 mesi precedenti la pretesa; e (b) 100
        EUR.
      </p>
      <p className={p4}>
        In nessun caso Dentoku Dev sarà responsabile per mancato guadagno, perdita di ricavi,
        perdita di dati, perdita di opportunità commerciali o danni indiretti, consequenziali,
        speciali o punitivi, anche se informata della possibilità di tali perdite.
      </p>
      <p className={p4}>
        <strong>Avviso per i consumatori.</strong> Nulla in questa Sezione esclude o limita la
        responsabilità per morte o lesioni personali causate da negligenza, per dolo o per
        qualsiasi altra responsabilità che non possa essere esclusa in base alla legge italiana
        inderogabile, compresi i diritti riconosciuti ai consumatori dal D.Lgs. 206/2005.
      </p>

      <h2 className={h2}>12. Cessazione</h2>
      <p className={p}>
        <strong>Da parte tua.</strong> Puoi smettere di usare i nostri servizi in qualsiasi
        momento. La cancellazione dei tuoi dati è regolata dalla nostra Informativa sulla privacy.
      </p>
      <p className={p4}>
        <strong>Da parte nostra.</strong> Possiamo sospendere o interrompere il tuo accesso con
        effetto immediato in caso di grave violazione dei presenti Termini (comprese le violazioni
        dell’uso consentito), se richiesto dalla legge o dall’autorità giudiziaria, o per gravi
        motivi di sicurezza. Daremo un ragionevole preavviso quando le circostanze lo consentono.
        La cessazione non dà diritto al rimborso degli importi già pagati, salvo quando previsto
        dalla legge.
      </p>
      <p className={p4}>
        Le disposizioni che per loro natura devono sopravvivere (proprietà intellettuale,
        riservatezza, limitazione di responsabilità, legge applicabile) restano in vigore dopo la
        cessazione.
      </p>

      <h2 className={h2}>13. Legge applicabile e foro competente</h2>
      <p className={p}>
        I presenti Termini sono regolati dalla legge italiana e interpretati in conformità a essa,
        con esclusione delle sue norme di diritto internazionale privato. Per le{" "}
        <strong>controversie tra imprese</strong> è competente in via esclusiva il Foro di Milano.
        Per le <strong>controversie con i consumatori</strong> si applicano le norme italiane ed
        europee inderogabili sulla competenza; i consumatori residenti nell’UE possono agire
        davanti ai giudici del proprio luogo di residenza ai sensi dell’art. 18 del Regolamento
        (UE) 1215/2012 (Bruxelles I bis).
      </p>
      <p className={p4}>
        Quando la legge italiana richiede un tentativo di risoluzione stragiudiziale prima del
        giudizio, le parti si impegnano a partecipare alla mediazione ai sensi del D.Lgs. 28/2010.
        Per i consumatori dell’UE, le controversie possono essere presentate anche tramite la
        piattaforma europea per la risoluzione delle controversie online all’indirizzo{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className={a}>
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2 className={h2}>14. Modifiche ai presenti Termini</h2>
      <p className={p}>
        Possiamo rivedere i presenti Termini per riflettere modifiche normative, di prodotto od
        operative. Per le modifiche sostanziali che riguardano gli utenti esistenti daremo un
        preavviso di almeno 30 giorni via email o con un avviso ben visibile in questa pagina.
        L’uso continuato dopo la data di efficacia costituisce accettazione dei Termini
        modificati. Se non accetti i Termini modificati, puoi smettere di usare i servizi; per i
        prodotti a pagamento, contattaci entro 30 giorni dall’avviso di modifica per valutare le
        opzioni disponibili.
      </p>

      <h2 className={h2}>15. Disposizioni varie</h2>
      <p className={p}>
        <strong>Intero accordo.</strong> I presenti Termini, insieme a qualsiasi SOW applicabile e
        alla nostra Informativa sulla privacy, costituiscono l’intero accordo tra te e Dentoku Dev
        relativo ai servizi e sostituiscono ogni precedente accordo o intesa.
      </p>
      <p className={p4}>
        <strong>Invalidità parziale.</strong> Se una disposizione è ritenuta inapplicabile, le
        restanti disposizioni restano pienamente efficaci; la disposizione inapplicabile sarà
        modificata nella misura minima necessaria per renderla applicabile.
      </p>
      <p className={p4}>
        <strong>Tolleranza.</strong> La mancata applicazione di una disposizione non costituisce
        rinuncia al diritto di applicarla in seguito.
      </p>
      <p className={p4}>
        <strong>Forza maggiore.</strong> Nessuna delle parti è responsabile dell’inadempimento
        causato da circostanze al di fuori del proprio ragionevole controllo (come calamità
        naturali, provvedimenti delle autorità o guasti diffusi delle infrastrutture), a condizione
        che la parte interessata ne dia tempestiva comunicazione e si adoperi ragionevolmente per
        limitarne gli effetti.
      </p>
      <p className={p4}>
        <strong>Lingua.</strong> I presenti Termini sono redatti in inglese. Questa traduzione
        italiana è fornita solo per comodità ed è in attesa di revisione legale. In caso di
        conflitto tra le due versioni, prevale la{" "}
        <Link href="/terms" hrefLang="en" lang="en" className={a}>
          versione inglese
        </Link>
        .
      </p>

      <h2 className={h2}>16. Contatti</h2>
      <p className={p}>
        Per domande sui presenti Termini: <Mail />. Per le comunicazioni legali, invia anche una
        copia tramite raccomandata alla sede di Dentoku Dev indicata sopra.
      </p>
    </>
  );
}
