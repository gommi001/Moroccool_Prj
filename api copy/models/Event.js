import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: {
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
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
    socials: {
        type: [String],
    }, 
    date: {
        type: String,
    }, 
    featured: {
        type: Boolean,
        default: false,
    }, 
  },
  {timestamps : true}
);

export default mongoose.model("Event", EventSchema );


{/*
{
	"title":"Cafe Amine",
	"type":"cafe",
	"city":"Rabat",
	"location":"Agdal - Rabat",
	"photo":"",
  "description":"We have Great service",
	"socials":"",
	"date":"",
	"price":,
	"featured":""
}
*/}