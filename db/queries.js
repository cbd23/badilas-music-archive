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

export default {
    getAllArtists,
    getAllAlbums,
    getAllGenres,
    getAllLabels,
    
}