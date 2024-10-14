import foodModel from "../models/foodModel.js";
import fs from "fs";

//Add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    // try {
    //     console.log(req.file);
    //     if (!req.file) {
    //         return res.status(400).json({ error: 'No file uploaded' });
    //     }
    //     let image_filename = `${req.file.filename}`;
    //     // Rest of your logic here...
    //     res.status(200).json({ message: 'File uploaded successfully', image_filename });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }

    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        image : image_filename,
        category : req.body.category,
    });

    

    try {
        await food.save();
        res.json({success : true, message : "Food Added"});
    } catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"});
    }
};

//All food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success : true, data : foods});
    } catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"});
    }
}

//Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success : true, message : "Food Removed"});
    } catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"});
    }
}

export {addFood,listFood,removeFood};