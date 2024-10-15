import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js";
import multer from "multer";


const foodRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    // destination : "uploads/",
    destination: (req, file, cb) => {
        return cb(null, 'uploads'); // Path where files are stored
    },
    filename : (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage: storage});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);



export default foodRouter;