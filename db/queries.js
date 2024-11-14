import pool from "./pool.js"

async function getAllArtists() {
    const { rows } = await pool.query('SELECT * FROM artists;')
    return rows
}

async function getAllAlbums() {
    const { rows } = await pool.query('SELECT * FROM albums;')
    return rows
}

async function getAllGenres() {
    const { rows } = await pool.query('SELECT * FROM genres;')
    return rows
}

async function getAllLabels() {
    const { rows } = await pool.query('SELECT * FROM labels;')
    return rows
}

async function getNewReleases() {
    const { rows } = await pool.query('SELECT albums.image, albums.title, artists.stage_name FROM albums INNER JOIN artists ON albums.artist_id = artists.id ORDER BY albums.released DESC LIMIT 10;')
    return rows
}

async function getTrendingArtists() {
    const { rows } = await pool.query('SELECT image, stage_name FROM artists ORDER BY stage_name DESC LIMIT 5;')
    return rows
}

export default {
    getAllArtists,
    getAllAlbums,
    getAllGenres,
    getAllLabels,
    getNewReleases,
    getTrendingArtists,
}