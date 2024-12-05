import db from "../db/queries.js"

async function labelsGet(req, res) {
    const labels = await db.getAllLabels()
    res.render("labels", { labels: labels })
}

async function albumsHavingLabelGet(req, res) {
    const id = req.params.labelId
    const albumsHavingLabel = await db.getAlbumsHavingLabel(id)
    const labelName = albumsHavingLabel.length > 0 ? "Albums released by " + albumsHavingLabel[0].name : "Sorry, no albums found from the selected label."
    res.render("albumsHavingLabel", { albumsHavingLabel: albumsHavingLabel, labelName: labelName })
}

export const labelsController = {
    labelsGet,
    albumsHavingLabelGet
}