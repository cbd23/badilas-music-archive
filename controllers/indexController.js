import db from "../db/queries.js"

async function indexGet(req, res) {
    // fetch the newest 10 albums to be displayed inside 'New Releases' section
    const newReleases = await db.getNewReleases()

    // fetch the artists
    const artists = await db.getTrendingArtists()

    res.render("index", { newReleases: newReleases, artists: artists })
}

export const indexController = {
    indexGet,
}