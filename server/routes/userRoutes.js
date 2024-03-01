import express from "express";
import { registerController } from "../controllers/userController.js";

//router object
const router = express.Router();

// register
router.post("/register", registerController);

//export
export default router;
