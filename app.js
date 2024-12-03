// default imports
import express from "express"
import { fileURLToPath } from 'url'
import path from "path"

// import routers
import indexRouter from "./routes/indexRouter.js"
import artistsRouter from "./routes/artistsRouter.js"
import albumsRouter from "./routes/albumsRouter.js"
import genresRouter from "./routes/genresRouter.js"
import labelsRouter from "./routes/labelsRouter.js"
import wikiRouter from "./routes/wikiRouter.js"

// define __filename & __dirname for ejs setup using ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// ejs setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// config app for serving static assets (like CSS files)
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

// use urlencoded for POST requests
app.use(express.urlencoded({ extended: true }))

// assign routers
app.use("/artists", artistsRouter)
app.use("/albums", albumsRouter)
app.use("/genres", genresRouter)
app.use("/labels", labelsRouter)
app.use("/", indexRouter)



const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`)
})