import db from "../db/queries.js"

async function genresGet(req, res) {
    const genres = await db.getAllGenres()

    res.render("genres", { genres: genres })
}

export const genresController = {
    genresGet,

}