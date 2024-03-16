import express from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
import { isAdmin } from "../middlewares/authMiddleware.js";
import {
  getAllProductsController,
  createProductController,
} from "../controllers/productController.js";

const router = express.Router();

// ============== PRODUCT ROUTES ==================

// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET SINGLE PRODUCT

// CREATE PRODUCT
router.post("/create", isAuth, singleUpload, createProductController);

export default router;
