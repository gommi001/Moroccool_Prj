import express from 'express'
import Hotel from "../models/Hotel.js";

///// Create Hotel ////////
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

///// Update Hotel ////////
export const updateHotel = async (req,res,next)=>{

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new :true })
        res.status(200).json(updatedHotel);
    }
    catch(err){
        next(err);
    }
}


///// Delete Hotel ////////
export const deleteHotel = async (req,res,next)=>{
     try{
        await Hotel.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Hotel Deleted !");
    }
    catch(err){
        next(err);
    }
}


///// Get Hotel ////////
export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    }
    catch(err){
        next(err);
    }
}


///// Get All Hotels ////////
export const getHotels = async (req,res,next)=>{
    try{
        const hotels = await Hotel.find(req.query);
        res.status(200).json(hotels);
    }
    catch(err){
        next(err);
    }
}

///// Count By City ////////
export const countByCity = async (req,res,next)=>{

    const cities = req.query.cities.split(",")
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
        const guesthouseCount =await  Hotel.countDocuments({type:"guesthouse"})

        res.status(200).json([
            {type:"hotels", count:hotelCount},
            {type:"riads", count : riadCount},
            {type:"villas", count : villaCount},
            {type:"motels", count : motelCount},
            {type:"appartements", count : appartementCount},
            {type:"guesthouses", count : guesthouseCount}
        ]);
    }
    catch(err){
        next(err);
    }
}