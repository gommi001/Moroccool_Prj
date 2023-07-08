import express from 'express'
import Cafe from "../models/Cafe.js";

///// Create Cafe ////////
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

///// Update Cafe ////////
export const updateCafe = async (req,res,next)=>{

    try{
        const updatedCafe = await Cafe.findByIdAndUpdate(req.params.id, { $set: req.body }, { new :true })
        res.status(200).json(updatedCafe);
    }
    catch(err){
        next(err);
    }
}


///// Delete Cafe ////////
export const deleteCafe = async (req,res,next)=>{
     try{
        await Cafe.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Cafe Deleted !");
    }
    catch(err){
        next(err);
    }
}


///// Get Cafe ////////
export const getCafe = async (req,res,next)=>{
    try{
        const cafe = await Cafe.findById(
            req.params.id
        );
        res.status(200).json(cafe);
    }
    catch(err){
        next(err);
    }
}


///// Get All Cafes ////////
export const getCafes = async (req,res,next)=>{
    try{
        const cafes = await Cafe.find(req.query);
        res.status(200).json(cafes);
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
            return Cafe.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }
    catch(err){
        next(err);
    }
}