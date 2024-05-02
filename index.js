const Express = require("express")
const songRepository = require("./repositories/SongObjectRepository")

const app = Express()

app.use(Express.json())

app.get("/songs", (req, res) => {
    const songs = songRepository.getAllSongs()
    res.send(songs)
})

app.get("/songs/:id", (req, res) => {
    const id = req.params.id
    
    const song = songRepository.getSongById(id)
    if (song) {
        res.send(song) // 200 viene inviato di default
    } else {
        res.status(404).send("Song not found")
    }
})

// endpoint per la creazione di una nuova canzone
app.post("/songs", (req, res) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const link = req.body.link
    const favourite = req.body.favourite

    if (
        (title === undefined) || 
        (imageUrl === undefined) || 
        (link === undefined) || 
        (favourite === undefined)
    ) {
        res.status(400).send("Missing field in request")
    } else {
        const song = songRepository.addSong({
            title: title,
            imageUrl: imageUrl,
            link: link,
            favourite: favourite
        })

        res.status(201).send("Song created with id " + song.id)
    }
})

// modifica canzone id-esima
app.post("/songs/:id", apiKeyMiddleware, (req, res) => {
    const id = req.params.id

    const song = songRepository.getSongById(id)
    if (!song) {
        res.status(404).send("Song not found")
        return
    }

    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const link = req.body.link
    const favourite = req.body.favourite

    if (
        (title === undefined) || 
        (imageUrl === undefined) || 
        (link === undefined) || 
        (favourite === undefined)
    ) {
        res.status(400).send("Missing field in request")
    } else {
        songRepository.updateSong(id, {
            title: title,
            imageUrl: imageUrl,
            link: link,
            favourite: favourite
        })

        res.status(200).send("Song updated")
    }

})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})