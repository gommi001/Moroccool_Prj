import Hotel from '../models/Hotel.js'

/////////////////////////*Making of the CRUD*//////////////////// 

//Create new Hotel//
export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err){
        next(err);
    }
}

//Update Hotel//
export const updateHotel = async (req,res,next)=>{
    const id = req.params.id

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(id, {
            $set : req.body
        }, {new:true})

        res.status(200).json(updatedHotel);
    }
    catch(err){
        next(err);
    }
}

//Delete Hotel//
export const deleteHotel = async (req,res,next)=>{

    const id = req.params.id

    try{
        await Hotel.findByIdAndDelete(id)

        res.status(200).json({message:"Hotel Deleted Successfully"});
    }
    catch(err){
        next(err);
    }
}

//Get Single Hotel//
export const getSingleHotel = async (req,res,next)=>{
    const id = req.params.id

    try{
        const singleHotel = await Hotel.findById(id).populate('reviews')

        res.status(200).json(singleHotel);
    }
    catch(err){
        res.status(500).json({message:"Hotel Not Found"});
    }
}

//Get All Hotels Hotel//
export const getAllHotels = async (req,res,next)=>{

    const AllHotels = await Hotel.find({}).populate('reviews')
    try{
        res.status(200).json(AllHotels);
    }
    catch(err){
        res.status(500).json({message:"Can't Get Hotels"});
    }
}

//// Get featured Hotel
{/* 
export const getHotelBySearch = async(req,res)=>{

    try{
        const hotels = req.query.cities.split("+")

        try{
            const list = await Promise.all(hotels.map(name=>{
                return Hotel.find({name:name})
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
            return Hotel.countDocuments({city:city})
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
        const hotelCount =await Hotel.countDocuments({type:"hotel"})
        const riadCount =await  Hotel.countDocuments({type:"riad"})
        const villaCount =await  Hotel.countDocuments({type:"villa"})
        const motelCount =await  Hotel.countDocuments({type:"motel"})
        const appartementCount =await  Hotel.countDocuments({type:"appartement"})

        res.status(200).json([
            {type:"hotels", count:hotelCount},
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

