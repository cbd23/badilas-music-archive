import { Router } from "express"
import { searchController } from "../controllers/searchController.js"

const searchRouter = Router()

searchRouter.get("/", searchController.searchResultsGet)

export default searchRouter