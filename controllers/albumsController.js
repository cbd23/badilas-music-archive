import db from "../db/queries.js"

async function albumsGet(req, res) {
    const albums = await db.getAllAlbums()

    res.render("albums", { albums: albums })
}

async function albumGet(req, res) {

    const id = req.params.albumId

    // fetch info based on album's id
    const album = await db.getAlbum(id)

    res.render("album", { album: album[0] })
}

export const albumsController = {
    albumsGet,
    albumGet,
}