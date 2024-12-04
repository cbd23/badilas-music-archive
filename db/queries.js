import pool from "./pool.js"

// get all artists by:

// A -> Z
async function getAllArtistsAsc() {
    const { rows } = await pool.query('SELECT * FROM artists ORDER BY stage_name ASC;')
    return rows
}

// Z -> A
async function getAllArtistsDesc() {
    const { rows } = await pool.query('SELECT * FROM artists ORDER BY stage_name DESC;')
    return rows
}

// Popularity ↑

// Popularity ↓

// Albums ↑

// Albums ↓


// GET all albums by:

// A -> Z
async function getAllAlbums() {
    const { rows } = await pool.query('SELECT albums.id, albums.image, albums.title, artists.stage_name FROM albums INNER JOIN artists ON albums.artist_id = artists.id ORDER BY albums.title;')
    return rows
}

// Z -> A



async function getAllGenres() {
    const { rows } = await pool.query('SELECT * FROM genres;')
    return rows
}

async function getAlbumsHavingGenre(id) {
    const { rows } = await pool.query('SELECT albums.*, artists.stage_name, genres.name FROM albums INNER JOIN genres_on_album ON albums.id = genres_on_album.album_id INNER JOIN genres ON genres_on_album.genre_id = genres.id INNER JOIN artists ON albums.artist_id = artists.id WHERE genres.id = $1 ORDER BY albums.released DESC;', [id])
    return rows
}

async function getAlbumsHavingLabel(id) {
    const { rows } = await pool.query('SELECT DISTINCT albums.*, artists.stage_name, labels.name FROM albums INNER JOIN artists ON albums.artist_id = artists.id INNER JOIN labels ON albums.label_id = labels.id WHERE labels.id = $1 ORDER BY albums.released DESC;', [id])
    console.log(rows)
    return rows
}

async function getAllLabels() {
    const { rows } = await pool.query('SELECT * FROM labels;')
    return rows
}

async function getNewReleases() {
    const { rows } = await pool.query('SELECT albums.id, albums.image, albums.title, artists.stage_name FROM albums INNER JOIN artists ON albums.artist_id = artists.id ORDER BY albums.released DESC LIMIT 10;')
    return rows
}

async function getTrendingArtists() {
    const { rows } = await pool.query('SELECT id, image, stage_name FROM artists ORDER BY stage_name DESC LIMIT 5;')
    return rows
}

// get info about a certain album
async function getAlbum(id) {
    const { rows } = await pool.query(`SELECT albums.id, albums.image, albums.title, albums.released, labels.name AS label, artists.stage_name, artists.id, STRING_AGG(genres.name, ', ') AS genres FROM albums LEFT JOIN genres_on_album ON albums.id = genres_on_album.album_id LEFT JOIN genres ON genres_on_album.genre_id = genres.id LEFT JOIN labels ON albums.label_id = labels.id LEFT JOIN artists on albums.artist_id = artists.id WHERE albums.id = $1 GROUP BY albums.id, albums.image, albums.title, albums.released, artists.stage_name, artists.id, labels.name;`, [id])
    return rows[0]
}

export default {
    getAllArtistsAsc,
    getAllAlbums,
    getAllGenres,
    getAllLabels,
    getNewReleases,
    getTrendingArtists,
    getAlbum,
    getAlbumsHavingGenre,
    getAlbumsHavingLabel,
}