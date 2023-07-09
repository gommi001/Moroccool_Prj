import express from "express";
import {countByCity, countByType, createEvent, deleteEvent, getAllEvents, getSingleEvent, updateEvent } from "../controllers/eventController.js";

const router = express.Router()

//create new Event
router.post('/',createEvent)

//update Event
router.put('/:id',updateEvent)

//delete Event
router.delete('/:id',deleteEvent)

//get single Event
router.get('/:id',getSingleEvent)

//get all Events
router.get('/',getAllEvents)


//count events by type and city
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)



export default router