import Event from '../models/Event.js'

/////////////////////////*Making of the CRUD*//////////////////// 

//Create new Event//
export const createEvent = async (req,res,next)=>{
    const newEvent = new Event(req.body);

    try{
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
    }
    catch(err){
        next(err);
    }
}

//Update Event//
export const updateEvent = async (req,res,next)=>{
    const id = req.params.id

    try{
        const updatedEvent = await Event.findByIdAndUpdate(id, {
            $set : req.body
        }, {new:true})

        res.status(200).json(updatedEvent);
    }
    catch(err){
        next(err);
    }
}

//Delete Event//
export const deleteEvent = async (req,res,next)=>{

    const id = req.params.id

    try{
        await Event.findByIdAndDelete(id)

        res.status(200).json({message:"Event Deleted Successfully"});
    }
    catch(err){
        next(err);
    }
}

//Get Single Event//
export const getSingleEvent = async (req,res,next)=>{
    const id = req.params.id

    try{
        const singleEvent = await Event.findById(id)

        res.status(200).json(singleEvent);
    }
    catch(err){
        res.status(500).json({message:"Event Not Found"});
    }
}

//Get All Events Event//
export const getAllEvents = async (req,res,next)=>{

    const AllEvents = await Event.find({})
    try{
        res.status(200).json(AllEvents);
    }
    catch(err){
        res.status(500).json({message:"Can't Get Events"});
    }
}

///// Count By City ////////
export const countByCity = async (req,res,next)=>{

    const cities = req.query.cities.split("+")

    try{
        const list = await Promise.all(cities.map(city=>{
            return Event.countDocuments({city:city})
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
        const EventCount =await Event.countDocuments({type:"Event"})
        const riadCount =await  Event.countDocuments({type:"riad"})
        const villaCount =await  Event.countDocuments({type:"villa"})
        const motelCount =await  Event.countDocuments({type:"motel"})
        const appartementCount =await  Event.countDocuments({type:"appartement"})

        res.status(200).json([
            {type:"Events", count:EventCount},
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
