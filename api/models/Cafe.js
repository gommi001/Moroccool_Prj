import mongoose from "mongoose";

const CafeSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  
  photos: {
    type: [String],
  },
  menu: {
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

export default mongoose.model("Cafe", CafeSchema)


//Insomnia API , JSON , values 
/*
{
	"name":"Cafe Amine",
	"type":"cafe",
	"city":"Rabat",
	"adress":"Agdal - Rabat",
	"photos":"",
	"menu":"",
	"title":"Modern Cafe",
	"desc":"We have Great service",
	"services":""
}
*/