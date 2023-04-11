import Booking from "../models/booking.js";
export const createBook=async(req,res,next)=>{
    const newBook=new Booking(req.body);
    try{
        const savedBook=await newBook.save()
        res.status(200).json(savedBook);
    }
    catch(err){
        next(err);
    }
}