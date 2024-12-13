import pool from "./pool.js"

// GET ARTISTS ###############

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

// TRENDING ARTISTS - DISPLAYED ON THE HOMEPAGE
async function getTrendingArtists() {
    const { rows } = await pool.query('SELECT id, image, stage_name FROM artists ORDER BY stage_name DESC LIMIT 5;')
    return rows
}

// GET ALL INFO ABOUT A SPECIFIC ARTIST
async function getArtist(id) {
    const { rows } = await pool.query('SELECT artists.id AS artist_id, artists.stage_name AS artist_stage_name, artists.real_name AS artist_real_name, artists.country AS artist_country, artists.image AS artist_img, albums.id AS album_id, albums.image AS album_img, albums.title AS album_title, albums.released AS album_released FROM artists INNER JOIN albums ON artists.id = albums.artist_id WHERE artists.id = $1 ORDER BY album_released DESC;', [id])
    return rows
}

// BY Popularity
async function getTopTrendingArtists() {
    const { rows } = await pool.query('SELECT id, image, stage_name FROM artists ORDER BY popularity_rating DESC;')
    return rows
}

// BY ALBUMS NUMBER
async function getArtistsByAlbumsNumber() {
    const query = `
        SELECT 
            artists.id, 
            artists.image, 
            artists.stage_name, 
            COUNT(albums.id) AS album_count
        FROM artists
        LEFT JOIN albums ON artists.id = albums.artist_id
        GROUP BY artists.id
        ORDER BY album_count DESC;
    `;
    const { rows } = await pool.query(query);
    return rows;
}


// GET ALBUMS ###############

// NEW RELEASES - ALBUMS DISPLAYED ON THE HOMEPAGE
async function getNewReleases() {
    const { rows } = await pool.query('SELECT albums.id, albums.image, albums.title, artists.stage_name FROM albums INNER JOIN artists ON albums.artist_id = artists.id ORDER BY albums.released DESC LIMIT 10;')
    return rows
}

// ALBUMS A -> Z
async function getAllAlbumsAsc() {
    const { rows } = await pool.query('SELECT albums.id, albums.image, albums.title, artists.stage_name FROM albums INNER JOIN artists ON albums.artist_id = artists.id ORDER BY albums.title;')
    return rows
}

// ALBUMS Z -> A
async function getAllAlbumsDesc() {
    const { rows } = await pool.query('SELECT albums.id, albums.image, albums.title, artists.stage_name FROM albums INNER JOIN artists ON albums.artist_id = artists.id ORDER BY albums.title DESC;')
    return rows
}

// GET ALL ALBUMS WITH A SPECIFIC GENRE
async function getAlbumsHavingGenre(id) {
    const { rows } = await pool.query('SELECT albums.*, artists.stage_name, genres.name FROM albums INNER JOIN genres_on_album ON albums.id = genres_on_album.album_id INNER JOIN genres ON genres_on_album.genre_id = genres.id INNER JOIN artists ON albums.artist_id = artists.id WHERE genres.id = $1 ORDER BY albums.released DESC;', [id])
    return rows
}

// GET ALL ALBUMS RELEASED BY A SPECIFIC LABEL
async function getAlbumsHavingLabel(id) {
    const { rows } = await pool.query('SELECT DISTINCT albums.*, artists.stage_name, labels.name FROM albums INNER JOIN artists ON albums.artist_id = artists.id INNER JOIN labels ON albums.label_id = labels.id WHERE labels.id = $1 ORDER BY albums.released DESC;', [id])
    console.log(rows)
    return rows
}

// GET ALL INFO ABOUT A SPECIFIC ALBUM
async function getAlbum(id) {
    const { rows } = await pool.query(`SELECT albums.id, albums.image, albums.title, albums.released, labels.name AS label, artists.stage_name, artists.id, STRING_AGG(genres.name, ', ') AS genres FROM albums LEFT JOIN genres_on_album ON albums.id = genres_on_album.album_id LEFT JOIN genres ON genres_on_album.genre_id = genres.id LEFT JOIN labels ON albums.label_id = labels.id LEFT JOIN artists on albums.artist_id = artists.id WHERE albums.id = $1 GROUP BY albums.id, albums.image, albums.title, albums.released, artists.stage_name, artists.id, labels.name;`, [id])
    return rows[0]
}


// GET GENRES ###############

async function getAllGenres() {
    const { rows } = await pool.query('SELECT * FROM genres;')
    return rows
}


// GET LABELS ###############

async function getAllLabels() {
    const { rows } = await pool.query('SELECT * FROM labels;')
    return rows
}

async function getSearchResults(searchTerm) {
    const query = `
        SELECT stage_name AS result_name, 'Artist' AS result_type, image AS result_image, id AS result_id
        FROM artists
        WHERE LOWER(stage_name) LIKE LOWER($1)
           OR LOWER(real_name) LIKE LOWER($1)
        UNION
        SELECT title AS result_name, 'Album' AS result_type, image AS result_image, id AS result_id
        FROM albums
        WHERE LOWER(title) LIKE LOWER($1)
           OR artist_id IN (
               SELECT id
               FROM artists
               WHERE LOWER(stage_name) LIKE LOWER($1)
                  OR LOWER(real_name) LIKE LOWER($1)
           );
    `
    const values = [`%${searchTerm}%`]
    const result = await pool.query(query, values)
    return result.rows
}

export default {
    getAllArtistsAsc,
    getAllArtistsDesc,
    getTrendingArtists,
    getArtist,
    getTopTrendingArtists,
    getArtistsByAlbumsNumber,
    getNewReleases,
    getAllAlbumsAsc,
    getAllAlbumsDesc,
    getAlbum,
    getAlbumsHavingGenre,
    getAlbumsHavingLabel,
    getAllGenres,
    getAllLabels,
    getSearchResults,
}