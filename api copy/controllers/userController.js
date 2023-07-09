import User from '../models/User.js'

/////////////////////////*Making of the CRUD*//////////////////// 

//Create new User//
export const createUser = async (req,res,next)=>{
    const newUser = new User(req.body);

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        next(err);
    }
}

//Update User//
export const updateUser = async (req,res,next)=>{
    const id = req.params.id

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set : req.body
        }, {new:true})

        res.status(200).json(updatedUser);
    }
    catch(err){
        next(err);
    }
}

//Delete User//
export const deleteUser = async (req,res,next)=>{

    const id = req.params.id

    try{
        await User.findByIdAndDelete(id)

        res.status(200).json({message:"User Deleted Successfully"});
    }
    catch(err){
        next(err);
    }
}

//Get Single User//
export const getSingleUser = async (req,res,next)=>{
    const id = req.params.id

    try{
        const singleUser = await User.findById(id)

        res.status(200).json(singleUser);
    }
    catch(err){
        res.status(500).json({message:"User Not Found"});
    }
}

//Get All Users User//
export const getAllUsers = async (req,res,next)=>{

    const AllUsers = await User.find({})
    try{
        res.status(200).json(AllUsers);
    }
    catch(err){
        res.status(500).json({message:"Can't Get Users"});
    }
}