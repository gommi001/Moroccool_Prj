import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,  
    },
    photos: {
      type: Array,
      //required:true  
    },
    logo: {
      type: String, 
      //required: true, 
    },
    description: {
      type: String,
      required: true,
    },
    map:{
        type:String
    },
    services: {
        type: [String],
    },
    socials: {
      type: [String],
    },
    phone: {
      type: String,
      //required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "HotelReview",
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    }, 
  },
  {timestamps : true}

);

export default mongoose.model("Hotel", HotelSchema);

{/*

{
	"name":"Cafe Amine",
	"type":"cafe",
	"city":"Rabat",
	"location":"Agdal - Rabat",
	"distance":"",
	"photos":"",
	"logo":"",
  "description":"We have Great service",
	"map":"",
	"reviews":"",
	"services":"We have Great service",
	"socials":"",
	"featured":""
}

*/}