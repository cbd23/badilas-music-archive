import db from "../db/queries.js"

async function labelsGet(req, res) {
    const labels = await db.getAllLabels()

    res.render("labels", { labels: labels })
}

export const labelsController = {
    labelsGet,
    
}