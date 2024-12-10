import { Router } from "express"
import { artistsController } from "../controllers/artistsController.js"

const artistsRouter = Router()

artistsRouter.get("/:artistId", artistsController.artistGet)
artistsRouter.get("/", artistsController.artistsGet)

export default artistsRouter