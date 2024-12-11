export function formatTitleForWiki(title) {
    // remove special characters and replace spaces with underscores
    return title.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "_")
}

export function formatNameForWiki(name) {
    // replace spaces with underscores
    return name.replace(/\s+/g, "_")
}