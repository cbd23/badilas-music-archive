import db from "../db/queries.js"

async function indexGet(req, res) {
    const newReleases = await db.getNewReleases()
    const artists = await db.getTrendingArtists()
    res.render("index", { newReleases: newReleases, artists: artists })
}

export const indexController = {
    indexGet,
}