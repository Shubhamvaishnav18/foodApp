import express from "express";
import { createContact } from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/contact", createContact);

export default contactRouter; 