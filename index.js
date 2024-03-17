const Express = require("express")
const songRepository = require("./repositories/SongObjectRepository")

const app = Express()


app.get("/songs", (req, res) => {
    // use songRepository to implement
    res.status(501).send("Not implemented yet")
})

app.get("/songs/:id", (req, res) => {
    // use songRepository to implement
    res.status(501).send("Not implemented yet")
})

app.post("/songs", (req, res) => {
    // use songRepository to implement
    res.status(501).send("Not implemented yet")
})

app.post("/songs/:id", (req, res) => {
    // use songRepository to implement
    res.status(501).send("Not implemented yet")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})