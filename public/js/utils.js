export function formatTitleForWiki(title) {
    // Remove special characters and replace spaces with underscores
    return title.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "_");
}