import { Router } from "express"
import { aboutController } from "../controllers/aboutController.js"

const aboutRouter = Router()

aboutRouter.get("/", aboutController.aboutGet)

export default aboutRouter