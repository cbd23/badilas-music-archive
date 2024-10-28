// default imports
import express from "express"
import { fileURLToPath } from 'url'
import path from "path"

// import routers


// define __filename & __dirname for ejs setup using ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// ejs setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// use urlencoded for POST requests
app.use(express.urlencoded({ extended: true }))

// assign routers


const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`)
})