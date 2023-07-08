import express from "express";
import {
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


/*
//////Create////////
router.post("/:hotelid", verifyAdmin, createRoom);

//////Update/////////
router.put("/:id", verifyAdmin, updateRoom);

//////Delete//////
router.delete("/:id", verifyAdmin, deleteRoom);

////////Get/////////
router.get("/:id", getRoom);

///////Get ALL///////
router.get("/", getRooms);

*/

export default router;
