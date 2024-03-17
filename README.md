## Introduzione

NaNaNa è un'applicazione musicale innovativa che mira a fornire agli utenti un'esperienza di streaming musicale. L'applicazione è progettata per consentire agli utenti di scoprire, ascoltare e gestire la propria libreria musicale in modo intuitivo e coinvolgente. Utilizzando una moderna architettura API basata su Express, NaNaNa offre una serie di endpoint che consentono agli sviluppatori di interagire con l'entità principale dell'applicazione: la canzone.

## Architettura del Sistema

NaNaNa è costruito su un'architettura API basata su Express, che consente una gestione efficiente delle richieste HTTP e una scalabilità ottimale. Il sistema è strutturato attorno all'entità "Song", che rappresenta una singola traccia musicale all'interno dell'applicazione.

## Proprietà di una Canzone

Ogni canzone all'interno di NaNaNa è rappresentata da un insieme di proprietà chiave. Le proprietà di una canzone includono:

- id: Un identificatore univoco che rappresenta la canzone all'interno dell'applicazione.
- title: Il titolo della canzone.
- imageUrl: L'URL dell'immagine associata alla canzone.
- link: L'URL che porta alla traccia audio o al sito web della canzone.
- favourite: Uno stato che indica se la canzone è contrassegnata come preferita dall'utente o meno.

## Endpoint API

NaNaNa espone una serie di endpoint API per consentire agli sviluppatori di interagire con le canzoni all'interno dell'applicazione. Attualmente, gli endpoint disponibili sono i seguenti:

GET /songs: Questo endpoint restituisce un elenco di tutte le canzoni presenti nell'applicazione.

GET /songs/:id: Questo endpoint restituisce i dettagli di una singola canzone identificata dal suo ID univoco.

POST /songs: Questo endpoint consente di aggiungere una nuova canzone alla libreria dell'applicazione.

POST /songs/:id: Questo endpoint consente di aggiornare i dettagli di una specifica canzone identificata dal suo ID.

POST /songs/:id/favourite: Questo endpoint consente di contrassegnare una specifica canzone come preferita o meno.

## Risposte HTTP

Nella progettazione di un'applicazione API come NaNaNa, è essenziale definire in modo chiaro le risposte HTTP che l'applicazione può restituire in risposta alle richieste dei client. Qui di seguito sono descritte le risposte HTTP gestite dagli endpoint API di NaNaNa:

### 200 OK

Il codice di stato 200 OK viene restituito quando una richiesta viene completata con successo. In risposta a una richiesta valida, gli endpoint API restituiranno questa risposta con i dati richiesti nel corpo della risposta.

### 400 Bad Reques

Il codice di stato 400 Bad Request viene restituito quando la richiesta del client non può essere elaborata a causa di errori nei dati inviati. Questo può includere parametri mancanti o non validi nella richiesta.

### 404 Not Found

Il codice di stato 404 Not Found viene restituito quando una richiesta non può essere soddisfatta perché la risorsa richiesta non è stata trovata. Questo può accadere ad esempio quando si tenta di accedere a una risorsa che non esiste

### 500 Internal Server Error

Il codice di stato 500 Internal Server Error viene restituito quando si verifica un errore imprevisto sul server che impedisce di soddisfare la richiesta del client. Questo può essere causato da problemi interni all'applicazione o da errori nel server.

### 501 Not Implemented

Il codice di stato 501 Not Implemented viene restituito quando una richiesta non può essere soddisfatta perché l'endpoint richiesto non è stato implementato. 

### Componente Repository

Nella progettazione di NaNaNa, è fondamentale avere un'infrastruttura solida per interagire con la base di dati sottostante che memorizza le informazioni sulle canzoni. Per questo, l'applicazione utilizza un componente di tipo `Repository` per gestire l'accesso e la manipolazione dei dati.

Il componente `Repository` si occupa di isolare la logica di accesso ai dati dall'implementazione specifica del database sottostante. Questo significa che il resto dell'applicazione non deve preoccuparsi dei dettagli tecnici di come i dati vengono memorizzati e recuperati.

Il `Repository` offre un'interfaccia standardizzata per eseguire operazioni CRUD (Create, Read, Update, Delete) sulle entità di dominio, come le canzoni. Ciò consente una maggiore modularità e facilità di manutenzione del codice.

Il service per le canzoni offre i seguenti metodi:

```js
    // Restituisce un elenco di tutte le canzoni presenti nell'applicazione.
    getAllSongs() {}

    // Restituisce i dettagli di una singola canzone identificata dal suo ID univoco. Se la canzone non esiste, restituisce null.
    getSongById(id) {}

    // Aggiunge una nuova canzone alla libreria dell'applicazione. Restituisce la nuova canzone aggiunta. L'id della canzone viene generato automaticamente.
    addSong(songData) {}

    // Aggiorna i dettagli di una specifica canzone identificata dal suo ID. Restituisce true se l'aggiornamento ha avuto successo, altrimenti false (es. se l'id specificato non corrisponde a nessuna canzone).
    updateSong(id, songData) {}

    // Contrassegna una specifica canzone come preferita o meno. Restituisce true se l'operazione ha avuto successo, altrimenti false (es. se l'id specificato non corrisponde a nessuna canzone).
    markAsFavourite(id, isFavourite) {}
```