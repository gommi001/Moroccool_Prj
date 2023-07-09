import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//create new Hotel
router.post('/', createHotel)

//update Hotel
router.put('/:id', verifyAdmin, updateHotel)

//delete Hotel
router.delete('/:id', deleteHotel)

//get single Hotel
router.get('/find/:id',getSingleHotel)

//get all Hotel
router.get('/',getAllHotels)


//count hotels by type and city
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)


// get hotel by search
//router.get("/search/getHotelBySearch",getHotelBySearch)


export default router