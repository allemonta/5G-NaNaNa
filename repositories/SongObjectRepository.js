
const randomId = () => Math.floor(Math.random() * 10000)
const songs = []


// return the whole `songs` list
const getAllSongs = () => {
    return songs
}

const getIndexById = (id) => {
    return songs.findIndex((song) => {
        return song.id = id
    })
}

// use the .find method applied to the `songs` list
const getSongById = (id) => {
    const index = getIndexById(id)

    if (index === -1) {
        return null
    }

    return songs[index]

    // for (let i = 0; i< songs.length; i++) {
    //     if (songs[i].id === id) {
    //         return songs[id]
    //     }
    // }

    // for (let i in songs) {
    //     if (songs[i].id === id) {
    //         return songs[id]
    //     }
    // }

    // for (let song of songs) {
    //     if (song.id === id) {
    //         return songs[id]
    //     }
    // }

    // return null
}

// generate a random id and add the song data with the new id to the `songs` list
const addSong = (songData) => {
    songData.id = randomId()
    songs.push(songData)
}


// use the getSongById() method and, if exists, replace with the new songData value
const updateSong = (id, songData) => {
    songData.id = id

    const idx = getIndexById(id)
    if (idx !== -1) {
        songs[idx] = songData
    }
}

// use the getSongById() method with the updateSong() method
const markAsFavourite = (id, isFavourite) => {
    const song = getSongById(id)
    if (song) {
        song.isFavourite = isFavourite
        updateSong(song.id, song)
    }
}

module.exports = {
    markAsFavourite,
    updateSong,
    getAllSongs,
    getSongById,
    addSong,
    randomId
}







