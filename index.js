const Express = require("express")
const songRepository = require("./repositories/SongObjectRepository")

const app = Express()

app.use(Express.json())

app.get("/songs", (req, res) => {
    const songs = songRepository.getAllSongs()
    res.send(songs)
})

app.get("/songs/:id", (req, res) => {
    // use songRepository to implement
    res.status(501).send("Not implemented yet")
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
        songRepository.addSong({
            title: title,
            imageUrl: imageUrl,
            link: link,
            favourite: favourite
        })

        res.status(201).send("Song created")
    }
})

app.post("/songs/:id", (req, res) => {
    // use songRepository to implement
    res.status(501).send("Not implemented yet")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})