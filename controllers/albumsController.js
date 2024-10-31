import db from "../db/queries.js"

async function albumsGet(req, res) {
    const albums = await db.getAllAlbums()

    res.render("albums", { albums: albums })
}

export const albumsController = {
    albumsGet,
    
}