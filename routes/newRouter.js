import { Router } from "express"
import { newController } from "../controllers/newController.js"

const newRouter = Router()

newRouter.get("/artist", newController.newArtistGet)
newRouter.get("/album", newController.newAlbumGet)

export default newRouter