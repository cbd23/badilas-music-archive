import db from "../db/queries.js"

async function newArtistGet(req, res) {
    res.render("addNewArtist", {})
}

async function newAlbumGet(req, res) {
    res.render("addNewAlbum", {})
}

export const newController = {
    newArtistGet,
    newAlbumGet,
}