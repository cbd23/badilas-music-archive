import fetch from "node-fetch"
import { formatNameForWiki } from "../public/js/utils.js"
import db from "../db/queries.js"

async function artistsGet(req, res) {
    const artists = await db.getAllArtistsAsc()
    res.render("artists", { artists: artists })
}

async function artistGet(req, res) {
    const id = req.params.artistId

    // fetch artist details from the database
    const artist = await db.getArtist(id)
    if (!artist) {
        return res.status(404).send("Artist not found")
    }

    // format the stage_name for Wikipedia query
    const formattedName = formatNameForWiki(artist[0].artist_stage_name)

    // build the Wikipedia API query
    const wikiApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(formattedName)}`
    let intro = ""

    try {
        // fetch the artist introduction from Wikipedia
        const response = await fetch(wikiApiUrl)
        if (response.ok) {
            const data = await response.json()
            intro = data.extract || "No introduction available."
        } else {
            intro = "No introduction available."
        }
    } catch (error) {
        console.error("Error fetching Wikipedia intro:", error)
        intro = "Error fetching Wikipedia introduction."
    }

    // render the artist page with artist details and intro
    res.render("artist", { artist: artist, intro: intro })
}

export const artistsController = {
    artistsGet,
    artistGet,
}