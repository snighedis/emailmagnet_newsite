# EmailMagnet: cosa promette il sito, cosa fa il prodotto

_Audit delle claim di prodotto su dentokudev.com, agosto 2026. Da rileggere quando il gate
sull'export è live sullo store._

## In breve

Il sito descrive un prodotto sensato che non è mai stato costruito: un piano gratuito con export
limitato a 100 email e un PRO che toglie il limite. È il modello di Email Extract, il concorrente
con 500.000 utenti che gata il download oltre le 50 email. La buona notizia è che la strada è già
scritta nel copy: va costruita, non inventata.

La notizia meno buona è che **il gate sull'export risolve solo due delle sei claim contestate**.
Le altre quattro restano false anche dopo il rilascio, e una di queste è la più cara di tutte.

## Le sei claim, una per una

| # | Claim sul sito | Dove | Il gate la risolve? |
|---|---|---|---|
| 1 | Free: "Export up to 100 emails at once" | `site.ts:262` | **Sì.** È esattamente ciò che stai costruendo. |
| 2 | PRO: "Unlimited export size" | `site.ts:280` | **Sì.** Diventa ciò che il PRO toglie. |
| 3 | Free: "200 emails per month" | `site.ts:261` | **No.** Serve un contatore mensile, che è un'altra funzione. |
| 4 | PRO: "Unlimited email extraction" | `site.ts:279` | **No.** Ha senso solo se il free ha un tetto: dipende da #3. |
| 5 | PRO: "Autosave while browsing" | `site.ts:281` | **No.** L'accumulo locale avviene già per tutti. |
| 6 | PRO: "Faster processing for recurring research sessions" | `site.ts:283` | **No.** Nessuna differenza di velocità nel codice. |

## La claim più costosa non è nella lista che ti aspetti

Non è il limite di 100 sul free. Quella promette **meno** di quanto il prodotto dia: chi esporta 500
email scopre che funziona, e nessuno si lamenta di ricevere più del previsto.

Il problema è la #2 letta al contrario. **"Unlimited export size" è venduta come beneficio PRO**,
quindi qualcuno paga 19 dollari per togliere un limite che oggi non esiste. Stessa cosa per #4, #5 e
#6: sono differenze a pagamento che non esistono nel prodotto.

È lo stesso schema del badge "Your text never leaves your browser" su ClickPilot, corretto in
`fbca327`: una promessa che si contraddice con la realtà del prodotto, su una pagina che vende.

## Dove sono le claim

Dieci punti, e due sfuggono facilmente:

- `src/data/site.ts:261-283` — i due piani, sorgente di tutto il resto
- `src/app/pricing/page.tsx:54` — tabella comparativa
- **`src/lib/schema.ts:118, 128, 138`** — **JSON-LD**: dichiarate a Google, non solo scritte in pagina
- **`src/lib/site.test.ts:103`** — **un test asserisce** su `"Autosave while browsing."`
- `src/app/emailmagnet/free-email-extractor/page.tsx:16, 35`
- `src/app/docs/[slug]/page.tsx:63`
- Tre post: `free-vs-pro-when-to-upgrade-emailmagnet`, `what-is-emailmagnet`, `store-locator-lead-research-workflow`

I dati strutturati sono la parte delicata: una feature inesistente in JSON-LD è una dichiarazione
formale a un motore di ricerca, non una riga di marketing.

## Autosave: l'alternativa è migliore dell'eliminazione

Il salvataggio esiste già. `emailStore.byUrl` accumula i risultati di ogni pagina visitata e li
persiste in locale. Quello che non esiste è il cloud.

Invece di togliere la funzione, si può darle un lavoro vero: **fare in modo che il toggle controlli
davvero l'accumulo della cronologia**. Acceso (default) tiene lo storico, spento conserva solo la
pagina corrente.

Diventa una cosa onesta e perfino desiderabile: un controllo di privacy su un database locale di
email estratte, che oggi cresce senza che l'utente possa dire di no. La parola "Autosave" resta
valida ovunque, sito, store e interfaccia, e cambia solo di colonna.

**Il rovescio, da sapere prima di decidere:** non può restare nella lista PRO. Un controllo di
privacy dietro un paywall è indifendibile, e comunque per un utente free la cronologia è invisibile,
quindi il toggle avrebbe senso solo da PRO. Sul sito diventa "Autosave locale" tra le funzioni free,
mentre il PRO tiene **"Vedi la tua cronologia Autosave tra tutti i siti"**, che è la cosa che
davvero solo il PRO può fare.

Costo realistico: 3-5 ore.

## Cosa fare, in ordine

1. **Il gate sull'export.** È già promesso dal sito, il mercato dimostra di pagarlo, e sarebbe il
   primo limite visibile che questo prodotto abbia mai avuto. Risolve #1 e #2.
2. **Decidere su #3 e #4 insieme.** O arriva il contatore mensile e le claim diventano vere, o
   spariscono entrambe. Non ha senso tenerne una sola.
3. **Autosave (#5)** con lo spostamento di colonna descritto sopra.
4. **Togliere "Faster processing" (#6).** Non c'è nessuna versione di questo aggiornamento che la
   renda vera, ed è l'unica delle sei che non ha una strada.
5. **Allineare il sito** solo quando ogni funzione è live sullo store, non prima. Vale la stessa
   regola usata per il paragrafo di opt-out nella privacy policy: non si pubblica una promessa
   prima che l'utente possa verificarla. Ricordarsi il JSON-LD e il test.

## Nota sulla sequenza

Oggi il sito è **avanti** rispetto all'estensione. Finché il gate non è live, le claim #1 e #2
restano non vere, ma sbagliano nella direzione innocua per chi usa il prodotto gratis e in quella
dannosa per chi paga. Se il rilascio slitta di molto, conviene togliere #2 dalla lista PRO
nell'attesa: è quella che incassa soldi per una differenza che non c'è.
