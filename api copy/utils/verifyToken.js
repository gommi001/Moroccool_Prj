import  jwt  from "jsonwebtoken";

const verifyToken = (req,res,next)=>{
    
    const token = req.cookies.accesToken

    if(!token){
        return res.status(401).json({success : false , message :"You don't have access"})
    }

    //if token exist then verify the token
    jwt.verify(token, process.env.JWT, (err, next)=>{
        if(err){
            return res.status(401).json({success : false , message :"Invalid Token"})
        }

        req.user = user
        next() //The next() function is a function in the Express router that, when invoked, executes the next middleware in the middleware stack. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.
    })
}

export const verifyUser= (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.id == req.params.id || req.user.role == 'admin'){
            next()
        }else{
            return res
            .status(401)
            .json({success : false , message :"You are not Authentificated"})
        }
    })
}

export const verifyAdmin= (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.role == 'admin'){
            next()
        }else{
            return res
            .status(401)
            .json({success : false , message :"You are not Admin"})
        }
    })
}