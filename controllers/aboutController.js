async function aboutGet(req, res) {
    res.render("about", {})
}

export const aboutController = {
    aboutGet,
}