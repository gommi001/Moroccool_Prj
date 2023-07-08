import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

/*
router.get("/checkauth", verifyToken, (req, res, next)=>{
  res.send("Hello , you are logged in !")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
  res.send("You are logged in, You can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
  res.send("Dear Admin,You are logged in, You can delete all accounts")
})
*/

//////Update User/////////
router.put("/:id",verifyUser, updateUser)

//////Delete User//////
router.delete("/:id",verifyUser, deleteUser)

////////Get User/////////
router.get("/:id",verifyUser, getUser)

///////Get ALL Users///////
router.get("/",verifyAdmin, getUsers)


export default router