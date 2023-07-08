import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({

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
  },
  photos: {
    type: [String],
  },
  rooms: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  services: {
    type: String,
  }

});

export default mongoose.model("Hotel", HotelSchema)


//Insomnia API , JSON , values 
/*
{
	"name":"Hotel Amine",
	"type":"Hotel",
	"city":"Rabat",
	"adress":"Agdal - Rabat",
	"photos":"",
	"menu":"",
	"title":"Modern Hotel",
	"desc":"We have Great service",
	"services":""
}
*/