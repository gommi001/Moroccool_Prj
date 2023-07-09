import Hotel from '../models/Hotel.js'
import HotelReview from '../models/HotelReview.js'

export const createHotelReview = async (req,res)=>{

    const hotelId = req.params.hotelId
    const newReview = new HotelReview({...req.body})


    try{
        const savedReview = await newReview.save()

        //after creating a new review now update the reviews array of the hotel "review[]"
        
        await Hotel.findByIdAndUpdate(hotelId,{
            $push: {reviews: savedReview._id}
        })
        res.status(200).json({
            success:true, 
            message:'Review Submitted',
            data: savedReview
        })
    }
    catch(err) {
        res.status(500).json({
            success:false, 
            message:'Review Denied',
        })
    }
}