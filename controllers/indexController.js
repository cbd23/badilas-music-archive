import db from "../db/queries.js"

async function indexGet(req, res) {
    // fetch the newest 10 albums to be displayed inside 'New Releases' section
    const newReleases = await db.getNewReleases()

    res.render("index", { newReleases: newReleases })
}

export const indexController = {
    indexGet,
}