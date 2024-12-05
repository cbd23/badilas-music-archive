import { Router } from "express"
import { labelsController } from "../controllers/labelsController.js"

const labelsRouter = Router()

labelsRouter.get("/", labelsController.labelsGet)
labelsRouter.get("/:labelId", labelsController.albumsHavingLabelGet)

export default labelsRouter