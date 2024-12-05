import { Router } from "express"
import { genresController } from "../controllers/genresController.js"

const genresRouter = Router()

genresRouter.get("/", genresController.genresGet)
genresRouter.get("/:genre", genresController.albumsHavingGenreGet)

export default genresRouter