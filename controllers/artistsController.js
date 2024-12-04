import db from "../db/queries.js"

async function artistsGet(req, res) {
    // fetch all artists
    const artists = await db.getAllArtistsAsc()

    res.render("artists", { artists: artists })
}

export const artistsController = {
    artistsGet,

}