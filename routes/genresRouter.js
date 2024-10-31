import { Router } from "express"
import { genresController } from "../controllers/genresController.js"

const genresRouter = Router()

genresRouter.get("/", genresController.genresGet)

export default genresRouter