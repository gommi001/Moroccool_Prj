import User from "../models/User.js";
import bcrypt from 'bcryptjs' //bcrypt allows building a password security platform that can evolve alongside hardware technology to guard against the threats that the future may bring
import jwt  from "jsonwebtoken"; //jwt is a way for securely transmitting information between parties as a JSON object


/// Create User /////
export const register = async (req,res)=>{
    try{

        //crypting the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            img: req.body.img,
            phone: req.body.phone
        })

        await newUser.save()
        res.status(200).json({success: true , message : "User Successfully Created"})

    }catch(err){
        next(err)
    }
}

//// User Login ////
export const login = async (req,res)=>{

    const email = req.body.email

    try{
        const user = await User.findOne({email})

        //if user doesn't exist in the collection
        if(!user){
            return res.status(404).json({success:false , message : "User Doesn't Exist"})
        }
        //if the user exist, then check the password or compare the password
        const checkCorrectPassword = await bcrypt.compare(
            req.body.password, 
            user.password
        )

        //if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message:"Incorrect Password or Email"})
        }

        const {password,role, ...rest} = user._doc

        //create jwt token
        const token = jwt.sign(
            { id : user._id, role: user.role },
            process.env.JWT,
            
        )

        //set token in the browser cookie and send the response to the client
        res.cookie('accessToken', token, {
            httpOnly : true,
            expires : token.expiresIn
        }).status(200).
        json({
            token, 
            data:{...rest}},
            )

    }catch(err){
        res.status(401).json({success:false, message:"Failed to Login", err})
    }
}