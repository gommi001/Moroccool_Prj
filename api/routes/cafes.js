import express from 'express'
import { countByCity, createCafe, deleteCafe, getCafe, getCafes, updateCafe } from '../controllers/cafe.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//////Create////////
router.post("/",verifyAdmin, createCafe)

//////Update/////////
router.put("/:id",verifyAdmin, updateCafe)

//////Delete//////
router.delete("/:id",verifyAdmin, deleteCafe)

////////Get/////////
router.get("/find/:id", getCafe)

///////Get ALL///////
router.get("/", getCafes)


router.get("/countByCity", countByCity)
router.get("/countByType", getCafes)



export default router