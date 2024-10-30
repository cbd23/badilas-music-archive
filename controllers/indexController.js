import db from "../db/queries.js"

async function indexGet(req, res) {
    const artists = await db.getAllArtists()

    res.render("index", { artists: artists })
}

export const indexController = {
    indexGet
}