import db from "../db/queries.js"

async function artistsGet(req, res) {
    const artists = await db.getAllArtistsAsc()
    res.render("artists", { artists: artists })
}

async function artistGet(req, res) {
    const id = req.params.artistId
    const artist = await db.getArtist(id)
    console.log(artist)
    res.render("artist", { artist: artist })
}

export const artistsController = {
    artistsGet,
    artistGet,
}