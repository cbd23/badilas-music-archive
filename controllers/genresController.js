import db from "../db/queries.js"

async function genresGet(req, res) {
    const genres = await db.getAllGenres()

    res.render("genres", { genres: genres })
}

async function albumsHavingGenreGet(req, res) {

    const id = req.params.genre

    const albumsHavingGenre = await db.getAlbumsHavingGenre(id)

    res.render("albumsHavingGenre", { albumsHavingGenre: albumsHavingGenre })
}

export const genresController = {
    genresGet,
    albumsHavingGenreGet,
}