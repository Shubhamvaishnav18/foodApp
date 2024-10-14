import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://captain:tomato@cluster0.8g328.mongodb.net/tomato?retryWrites=true&w=majority")
    .then(()=>console.log("Connected to DB"));
};