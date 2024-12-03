import fetch from "node-fetch"
import db from "../db/queries.js"
import { formatTitleForWiki } from "../public/js/utils.js"

async function albumsGet(req, res) {
    const albums = await db.getAllAlbums()
    res.render("albums", { albums: albums })
}

async function albumGet(req, res) {
    const albumId = req.params.albumId

    // fetch album details from the database
    const album = await db.getAlbum(albumId)
    if (!album) {
        return res.status(404).send("Album not found")
    }

    // remove special characters from title before fetching the wiki API
    const albumTitle = formatTitleForWiki(album.title)
    const albumArtist = album.stage_name
    const query = `${albumTitle}_(${albumArtist}_album)`

    // use the album title to fetch the Wikipedia introduction
    const wikiApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
    let intro = ""

    try {
        const response = await fetch(wikiApiUrl)
        if (response.ok) {
            const data = await response.json()
            intro = data.extract || ""
        } else {
            intro = ""
        }
    } catch (error) {
        console.error("Error fetching Wikipedia intro:", error)
        intro = "Error fetching Wikipedia introduction."
    }

    // render the album page with album details and intro
    res.render("album", {
        album: album,
        intro: intro,
    })
}

export const albumsController = {
    albumsGet,
    albumGet,
}