import Cafe from "../models/Cafe.js";

/////////////////////////*Making of the CRUD*//////////////////// 

//Create new Cafe//
export const createCafe = async (req,res,next)=>{
    const newCafe = new Cafe(req.body);

    try{
        const savedCafe = await newCafe.save();
        res.status(200).json(savedCafe);
    }
    catch(err){
        next(err);
    }
}

//Update Cafe//
export const updateCafe = async (req,res,next)=>{
    const id = req.params.id

    try{
        const updatedCafe = await Cafe.findByIdAndUpdate(id, {
            $set : req.body
        }, {new:true})

        res.status(200).json(updatedCafe);
    }
    catch(err){
        next(err);
    }
}

//Delete Cafe//
export const deleteCafe = async (req,res,next)=>{

    const id = req.params.id

    try{
        await Cafe.findByIdAndDelete(id)

        res.status(200).json({message:"Cafe Deleted Successfully"});
    }
    catch(err){
        next(err);
    }
}

//Get Single Cafe//
export const getSingleCafe = async (req,res,next)=>{
    const id = req.params.id

    try{
        const singleCafe = await Cafe.findById(id).populate('reviews')

        res.status(200).json(singleCafe);
    }
    catch(err){
        res.status(500).json({message:"Cafe Not Found"});
    }
}

//Get All Cafes Cafe//
export const getAllCafes = async (req,res,next)=>{

    const AllCafes = await Cafe.find({}).populate('reviews')
    try{
        res.status(200).json(AllCafes);
    }
    catch(err){
        res.status(500).json({message:"Can't Get Cafes"});
    }
}

//// Get featured Cafe
{/* 
export const getCafeBySearch = async(req,res)=>{

    try{
        const Cafes = req.query.cities.split("+")

        try{
            const list = await Promise.all(Cafes.map(name=>{
                return Cafe.find({name:name})
            }))
            res.status(200).json(list);
        }
        catch(err){
            next(err);
        }

    }catch(err){
    }
}
*/}


///// Count By City ////////
export const countByCity = async (req,res,next)=>{

    const cities = req.query.cities.split("+")

    try{
        const list = await Promise.all(cities.map(city=>{
            return Cafe.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }
    catch(err){
        next(err);
    }
}

///// Count By Type ////////
export const countByType= async (req,res,next)=>{

    try{
        const CafeCount =await Cafe.countDocuments({type:"Cafe"})
        const riadCount =await  Cafe.countDocuments({type:"Restaurants"})
        const villaCount =await  Cafe.countDocuments({type:"villa"})
        const motelCount =await  Cafe.countDocuments({type:"motel"})
        const appartementCount =await  Cafe.countDocuments({type:"appartement"})

        res.status(200).json([
            {type:"Cafes", count:CafeCount},
            {type:"riads", count : riadCount},
            {type:"villas", count : villaCount},
            {type:"motels", count : motelCount},
            {type:"appartements", count : appartementCount},
        ]);
    }
    catch(err){
        next(err);
    }
}

