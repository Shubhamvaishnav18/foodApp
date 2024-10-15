import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

//Add food item
const addFood = async (req, res) => {

    try {
        const file = req.file; // Get the uploaded file from the request
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Define the filePath using the uploaded file's path
        // const filePath = path.join('uploads', file.filename);
        const fileName = file.filename;

        // Create a new food document with the provided details
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: fileName,
            category: req.body.category,
        });

        // Save the new food item to the database
        await food.save();

        res.status(201).json({
            success: true,
            message: 'Food item added successfully',
            food,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false,error: error.message });
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
        if (food.image) {
            const imagePath = path.join('uploads', food.image); // Create the absolute path to the image
            fs.unlink(imagePath, (err) => {
              if (err) {
                console.error('Error deleting file:', err);
              } else {
                console.log('Image deleted successfully');
              }
            });
          }
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success : true, message : "Food Removed"});
    } catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"});
    }
}

export {addFood,listFood,removeFood};