# Crossword-Sviluppo-di-serious-games-per-il-sito-del-Museo-Virtuale-d-Ateneo
Sviluppo di un cruciverba per valorizzare il contenuto artistico del Museo Virtuale d'Ateneo

Tirocinio per la Tesi di Laurea di Informatica Musicale

<h1>Manuale di gioco del cruciverba</h1>
In questa appendice è contenuto un manuale di gioco che illustra i comandi utilizzabili nella versione PC e Mobile del cruciverba, un piccolo paragrafo che descrive la piccola differenza che c'è tra la versione Android e la versione iOS ed infine una sezione che guida alla creazione di un nuovo cruciverba senza che l'utente abbia conoscenze in ambito programmazione.

\section{Versione PC}
Una volta scelto il cruciverba cliccando su uno dei bottoni presenti nella sezione principale, l'utente verrà indirizzato alla sezione contenente il gioco. A questo punto, l'utente potrà iniziare a digitare i caratteri solo dopo aver posizionato il cursore su una cella. Questo passo può essere fatto cliccando su una qualsiasi cella o su una delle domande presenti nell'elenco.

Dopo che il cursore è stato posizionato su una cella è possibile utilizzare i comandi presenti in tabella \ref{tab:comandicruciverba}.

\subsection{Comandi} 

\begin{table}[htbp]
\centering
\begin{tabular}{|l|p{0.6\linewidth}|}
\hline
\multicolumn{1}{|c|}{\textit{\textbf{Comando}}} & \multicolumn{1}{c|}{\textit{\textbf{Funzione}}}                                                   \tabularnewline \hline
$\rightarrow$      & Permette di navigare tra le celle orizzontali spostandosi verso destra       \tabularnewline \hline
$\leftarrow$        & Permette di navigare tra le celle orizzontali spostandosi verso sinistra     \tabularnewline \hline
$\uparrow$        & Permette di navigare tra le celle verticali spostandosi verso l'alto     \tabularnewline \hline
$\downarrow$      & Permette di navigare tra le celle verticali spostandosi verso il basso     \tabularnewline \hline	Doppio click su una cella        & Permette di cambiare l'orientamento di gioco nel caso la cella sia condivisa tra una parola orizzontale e una verticale     \tabularnewline \hline
Click su spazio bianco      & Nasconde la domanda dalla sezione del cruciverba \tabularnewline \hline
\end{tabular}
\caption{Tabella che schematizza alcuni comandi affiancandoli alla loro funzione}
\label{tab:comandicruciverba}   
\end{table}

Da specificare è il fatto che le funzioni correlate alla pressione delle frecce verticali o orizzontali funzioneranno solo se la navigazione all'interno delle celle contenenti caratteri si svolge in modo corretto. Se, per esempio, siamo in una situazione di orientamento verticale e cerchiamo di cambiare orientamento in orizzontale digitando la freccia a destra o a sinistra, ma la cella adiacente (a destra o a sinistra a seconda del caso) è una cella nera e quindi non selezionabile, l'orientamento non verrà cambiato e verrà fatto un focus sulla prima cella della sequenza. Se, invece, si rispettano le direzioni di navigazione all'interno delle celle abilitate, le frecce consentiranno di cambiare l'orientamento del cruciverba in prossimità delle celle comuni a due parole di orientamento opposto.

Nel caso si volessero svelare le soluzioni del gioco, è necessario cliccare sul pulsante "Mostra Soluzione", il quale andrà a compilare cella per cella la struttura tabulare del cruciverba e disabiliterà la digitazione di caratteri all'interno di ciascuna cella. Se invece, l'utente volesse tornare alla sezione principale per scegliere un altro cruciverba o per resettare e ricaricare il medesimo schema, il pulsante da cliccare è "Indietro". 

Nel momento in cui viene indovinata una parola, questa verrà colorata di verde e la definizione corrispondente, presente nell'elenco, verrà sbarrata. Se l'utente si posiziona su una lettera condivisa tra due parole indovinate e di orientamento opposto, cambiando questa lettera, il colore delle due parole tornerà ad essere quello di default.

\section{Versione Mobile} 
Nella versione mobile non è possibile navigare con le frecce, dato che la tastiera base della maggior parte dei dispositivi mobili non fornisce questi tasti, ma è possibile muoversi tra le varie celle della struttura tabellare attraverso un tocco sul touch screen in prossimità della cella su cui l'utente desidera posizionarsi oppure inserendo caratteri e sfruttando la ciclicità del motore quando vi è un focus su una determinata parola.

A differenza della versione per PC, la versione Mobile presenterà una icona, mostrata in figura \ref{fig:cluesicon}, al di sotto della quale è posta la scritta "definizioni". Al click su quest'ultima verrà mostrata la sezione contenente le definizioni, che avrà le medesime funzionalità di selezione viste per la versione PC. Al di sotto di questa sezione comparirà una "X" che se cliccata nasconderà le definizioni, le quali rimarranno comunque visibili, una alla volta, sopra la sequenza di celle selezionate. Oltre al pulsante "X" compariranno i pulsanti "Mostra Soluzioni" e "Indietro" la cui funzione è già stata descritta per la versione da PC.
Per un'esperienza più fluida di gioco non sono ammessi spazi tra le parole ne caratteri speciali o numeri, ma soltanto lettere. 

La versione da PC può essere utilizzata come versione da Mobile e non viceversa. Questa funzione si ottiene riducendo le dimensioni della finestra di gioco, sia che questa azione venga fatta manualmente riducendo la finestra o sia che venga fatta da console del browser.

\begin{figure}[!htb]
	\centering
	\includegraphics[width = 50mm]{immagini/Clues Icon.png}
	\caption{Il pulsante che in versione mobile mostra la sezione contenente le definizioni.}
	\label{fig:cluesicon}
\end{figure}

\subsection{Android}
Nella versione su Android c'è una piccola differenza rispetto a quella su Apple. In particolare, al manifestarsi della pressione del tasto "delete", il carattere contenuto nella cella verrà eliminato e si passerà alla cella precedente. Il carattere contenuto in questa cella verrà prima selezionato e poi, nel momento in cui si verifica una seconda pressione sul tasto "delete", verrà eliminato. Il passo si ripete nello stesso modo fino all'arrivo del cursore in prossimità della prima lettera della parola selezionata. Su sistemi operativi iOS e Windows, invece, l'eliminazione funzionerà correttamente al primo passaggio. 

\chapter{Manuale di gioco dell'impiccato}

In questa appendice è contenuto un manuale di gioco che illustra i comandi utilizzabili nel gioco dell'impiccato, con particolare attenzione alle impostazioni relative alla versione per utenti con disabilità visive, ed una sezione che guida alla creazione di nuove definizioni senza che l'utente abbia conoscenze in ambito programmazione.

\section{Comandi}
A differenza del cruciverba, che ha una versione per PC leggermente differente da quella per dispositivi mobili, il gioco dell'impiccato è identico per tutti i dispositivi attraverso il quale si interagisce.
Come per il cruciverba, dalla Home è possibile accedere alla schermata di gioco dopo aver cliccato sull'apposito pulsante. 

Una volta all'interno dell'area di gioco, l'utente potrà interagire attraverso la tastiera, sia virtuale (sotto forma di pulsanti sullo schermo), sia fisica, e avrà la possibilità di sbagliare sei volte. Terminati i tentativi, non sarà più possibile indovinare la parola perché quest'ultima verrà mostrata, ma l'utente potrà solamente procedere con il caricamento di una nuova parola.

Come per il cruciverba, per tornare nella Home sarà necessario cliccare sul pulsante "Indietro", mentre per procedere con una nuova parola basterà cliccare sul pulsante "Prossimo".

\section{Versione per utenti con disabilità visive}
Per accedere alle impostazioni della versione per utenti con disabilità visive è necessario posizionarsi sul pulsante raffigurante un ingranaggio e cliccare su di esso. 

\begin{figure}[!htb]
	\centering
	\includegraphics[width = 85mm]{immagini/impostazioni.png}
	\caption{Menu a tendina per gestire le impostazioni della versione per utenti con disabilità visive}
	\label{fig:impostazioni}
\end{figure}

Dopo la comparsa del menù a tendina, cliccando sul pulsante con l'icona dello speaker, sarà possibile attivare o disattivare i suoni, i quali vengono riprodotti nel momento in cui viene immessa una lettera corretta o sbagliata, quando si indovina l'intera parola o quando si finiscono i tentativi. 
Schiacciando il pulsante raffigurante l'icona dell'occhio sarà possibile passare in modalità non vedente, con conseguente disattivazione della tastiera virtuale e attivazione del motore Text-to-Speech per ricordare all'utente quanti errori può ancora fare e in che posizione si trovano le lettere indovinate ed eventuali spazi.
Infine, spostandosi sulla casella sottostante, sarà possibile selezionare un diverso motore di sintesi da quello impostato di default dal browser, oltre a modificare la velocità di riproduzione della sintesi vocale tramite lo slider posizionato appena al di sotto. I parametri di modifica dello slider vanno da un velocità minima di 0.5x ad una velocità massima di 2.0x.

A questo punto, il giocatore potrà interagire con il gioco solo attraverso la tastiera fisica del suo dispositivo nel caso in cui questo dispositivo sia un PC o un computer fisso. Da mobile, invece, rimarrà presente la tastiera virtuale per poter assicurare l'interazione con il gioco. In caso di disposizione di una tastiera Bluetooth, sarà possibile utilizzare tutti i comandi come se si stesse giocando da PC. Il consiglio, per avere una migliore interazione nel momento della digitazione da Mobile è proprio quello di utilizzare una tastiera esterna con funzionalità Bluetooth.

Come detto, a differenza del gioco per utenti senza disabilità visive, ci sarà la sintesi vocale a ricordare quanti errori mancano, l'indizio sulla parola da indovinare e lo stato della parola da indovinare, dove con stato si intende quante sono e dove si trovano le lettere indovinate e ancora da indovinare e dove sono posizionati, eventualmente, gli spazi. Inoltre, sarà presente una funzionalità per aumentare il contrasto e la dimensione dei testi nella pagina per utenti ipovedenti.

Sono state aggiunte delle shortcut da tastiera per facilitare l'interazione tra l'utente e il gioco. 
Di seguito sono elencati i comandi:

\begin{table}[htbp]
\centering
\begin{tabular}{|l|p{0.6\linewidth}|}
\hline
\multicolumn{1}{|c|}{\textit{\textbf{Comando}}} & \multicolumn{1}{c|}{\textit{\textbf{Funzione}}}                                                   \tabularnewline \hline
+      & Permette di passare alla prossima parola nella lista     \tabularnewline \hline
-        & Permette di tornare alla sezione principale   \tabularnewline \hline
.        & Permette di ripetere la definizione e lo stato della risposta \tabularnewline \hline
1       & Permette di attivare/disattivare la modalità per non vedenti     \tabularnewline \hline
2     & Permette di attivare/disattivare i suoni     \tabularnewline \hline
\end{tabular}
\caption{Tabella che schematizza alcuni comandi affiancandoli alla loro funzione}
\label{tab:comandi}   
\end{table}

Questi comandi non sono attivi solamente in modalità non vedenti, ma possono essere utilizzati come scorciatoie anche nella versione normale. 


\chapter{Creazione di nuovi schemi e definizioni}

\section{Guida alla creazione di un nuovo cruciverba}
Queste informazioni sono utili all'utente che voglia dare vita ad un nuovo cruciverba. 

Il programma consente di ricreare l'interfaccia grafica di un cruciverba già pensato o disegnato in precedenza. Non è quindi compito del programma generare gli intrecci tra parole.

Dopo aver scaricato il pacchetto in formato zip da Github al seguente link\footnote{\url{https://github.com/stefanolocati/Sviluppo-di-serious-games-per-il-Museo-Virtuale-d-Ateneo}} ed aver estratto tutti file in una cartella del computer, posizionarsi nella cartella js ed aprire il file "data.json" con un editor. Il passaggio successivo è quello di compilare i campi inserendo la definizione, la risposta, la posizione, l'orientamento, la cella di partenza sull'asse delle x e la cella di partenza sull'asse delle y. Bisogna porre particolare attenzione nel compilare tutti i campi ed in modo adeguato. La definizione e la risposta debbono essere delle stringhe, ovvero delle sequenze di caratteri; la posizione e le coordinate di partenza devono essere numeri interi e l'orientamento può assumere solo i valori "across" e "down". Non è obbligatorio mantenere lo stesso numero di definizioni del progetto di default, ma si possono aggiungere e togliere istanze con la sicurezza che la struttura delle aree di gioco verrà implementata dinamicamente.

\section{Guida all'inserimento di nuove parole}
Queste informazioni sono utili all'utente che desideri creare un gioco dell'impiccato personalizzato.
Dopo aver scaricato il pacchetto in formato Zip da Github al seguente link\footnote{\url{https://github.com/stefanolocati/Sviluppo-di-serious-games-per-il-Museo-Virtuale-d-Ateneo}} ed aver estratto tutti i file in una cartella del computer, posizionarsi nella cartella js ed aprire il file "data.json" con un editor. Il passaggio successivo è quello di compilare i due campi della struttura "Hangman". Bisogna porre particolare attenzione nel compilare tutti i campi ed in modo adeguato. La definizione, la risposta e il link debbono essere delle stringhe, ovvero delle sequenze di caratteri. Non è obbligatorio mantenere lo stesso numero di definizioni del progetto di defualt, ma si possono aggiungere e togliere istanze con la sicurezza che la struttura verrà implementata dinamicamente. Inoltre, a differenza del cruciverba è possibile inserire parole che contengono spazi.
Bisogna, inoltre, porre attenzione al fatto che il link sia effettivamente un link valido e non parziale o presente solamente sul computer locale. 

