import { Router } from "express"
import { albumsController } from "../controllers/albumsController.js"

const albumsRouter = Router()

albumsRouter.get("/", albumsController.albumsGet)

export default albumsRouter