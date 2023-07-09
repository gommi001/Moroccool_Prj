import express from "express";
import { countByCity, countByType, createCafe, deleteCafe, getAllCafes, getSingleCafe, updateCafe } from "../controllers/cafeController.js";


const router = express.Router()

//create new Cafe
router.post('/',createCafe)

//update Cafe
router.put('/:id',updateCafe)

//delete Cafe
router.delete('/:id',deleteCafe)

//get single Cafe
router.get('/find/:id',getSingleCafe)

//get all Cafe
router.get('/',getAllCafes)


//count Cafes by type and city
router.get("/countByCity", countByCity)
router.get("/countByType",countByType )


// get Cafe by search
//router.get("/search/getCafeBySearch",getCafeBySearch)


export default router