import  express  from "express";
import { createCafeReview } from "../controllers/reviewCafeController.js";


const router = express.Router()

router.post('/:cafeId', createCafeReview)


export default router