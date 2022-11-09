# ESAMIGRAM

Webapp FullStack, permette di aggiungere strutture ospedaliere e ricercare le stesse in base agli esami che svolgono.


**Descrizione**


Frontend intuitivo per l'aggiunta di una nuova struttura;
La searchbar filtra durante la compilazione le strutture che eseguono l'esame desiderato

Le Strutture ospedaliere sono rappresentate da oggetti con le seguenti caratteristiche:


Nome,

Regione,

Città,

Numero di telefono,

Esami.


Il bottone **"+"** ha la funzione di aggiungere ulteriori campi per gli esami.


**NON** è possibile pagare la "sponsorizzazione"
Sarebbe possibile integrare un sistema di login per le strutture, con quindi gestione dei propri dati per un eventuale aggiornamento/rimozione e aggiungere anche un sistema di pagamento.
L'aggiornamento dei dati non è stato integrato ne nel frontend ne nel backend (PUT vuoto, DELETE elimina tutte le strutture in db, utile per ripulire durante i vari test)


## HOW TO USE

Nella cartella src/server/ avviare nodemon tramite **npm run start** per avviare il server (localhost:3333)

Nella cartella generale avviare la webapp tramite **npm start**