import express from "express";
import { createBook } from "../controller/book.js";

const router=express.Router();
router.post("/",createBook);
export default router