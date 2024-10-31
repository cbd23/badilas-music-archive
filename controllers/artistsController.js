import db from "../db/queries.js"

async function artistsGet(req, res) {
    const artists = await db.getAllArtists()

    res.render("artists", { artists: artists })
}

export const artistsController = {
    artistsGet,

}