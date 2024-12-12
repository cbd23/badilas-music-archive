import db from "../db/queries.js"

async function searchResultsGet(req, res) {

    const searchTerm = req.query.SearchTerm

    try {
        const results = await db.getSearchResults(searchTerm)
        res.render("search", { searchTerm, results })
    } catch (error) {
        console.error("Error fetching search results:", error)
        res.status(500).send("An error occurred while processing your request.")
    }
}

export const searchController = {
    searchResultsGet,
}