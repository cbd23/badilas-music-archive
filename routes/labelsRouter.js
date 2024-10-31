import { Router } from "express"
import { labelsController } from "../controllers/labelsController.js"

const labelsRouter = Router()

labelsRouter.get("/", labelsController.labelsGet)

export default labelsRouter