import express from "express";
import { updateUser, deleteUser, getAllUsers, getSingleUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router()

//////// Create User in authController.js////////////

//update User
router.put('/:id', updateUser)

//delete User
router.delete('/:id', deleteUser)

//get single User
router.get('/:id', getSingleUser)

//get all User
router.get('/',getAllUsers)



export default router