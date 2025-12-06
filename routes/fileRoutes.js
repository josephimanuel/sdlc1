import express from "express";
import { getFile } from "../controllers/fileController.js";
const router = express.Router();

router.get("/", getFile); // /files?name=...
export default router;