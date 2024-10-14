import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination : "uploads/",
    filename : (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads');
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
//     }
// });

const upload = multer({storage: storage});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);



export default foodRouter;