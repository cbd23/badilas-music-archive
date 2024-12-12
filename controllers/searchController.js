import db from "../db/queries.js"

async function searchResultsGet(req, res) {

    const searchTerm = req.query.SearchTerm

    try {
        // get search results
        const results = await db.getSearchResults(searchTerm);

        // filter results to separate albums and artists
        const albums = results.filter(result => result.result_type === 'Album');
        const artists = results.filter(result => result.result_type === 'Artist');

        // pass the results to the view
        res.render("search", { searchTerm, albums, artists });
    } catch (err) {
        console.error("Error fetching search results:", err);
        // if an error occurs, send empty arrays for albums and artists
        res.render("search", { searchTerm, albums: [], artists: [] });
    }
}

export const searchController = {
    searchResultsGet,
}