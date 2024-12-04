import db from "../db/queries.js"

async function genresGet(req, res) {
    const genres = await db.getAllGenres()

    res.render("genres", { genres: genres })
}

async function albumsHavingGenreGet(req, res) {

    const id = req.params.genre

    const albumsHavingGenre = await db.getAlbumsHavingGenre(id)

    const genreName = albumsHavingGenre.length > 0 ? albumsHavingGenre[0].name + " albums" : "Sorry, no albums found for the selected genre."

    res.render("albumsHavingGenre", { albumsHavingGenre: albumsHavingGenre, genreName: genreName })
}

export const genresController = {
    genresGet,
    albumsHavingGenreGet,
}