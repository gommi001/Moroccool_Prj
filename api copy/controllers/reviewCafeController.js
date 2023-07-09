import Cafe from '../models/Cafe.js'
import CafeReview from '../models/CafeReview.js'

export const createCafeReview = async (req,res)=>{

    const cafeId = req.params.cafeId
    const newReview = new CafeReview({...req.body})


    try{
        const savedReview = await newReview.save()

        //after creating a new review now update the reviews array of the hotel "review[]"
        
        await Cafe.findByIdAndUpdate(cafeId,{
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