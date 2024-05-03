import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://danishsiddiqui:12344321ab@cluster0.laiavcz.mongodb.net/food-del').then(() =>console.log("DB Connected"));
    
}        
