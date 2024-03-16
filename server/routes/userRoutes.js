import express from "express";
import {
  loginController,
  registerController,
  getUserProfileController,
  logoutController,
  updateProfileController,
  udpatePasswordController,
  updateProfilePicController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
//router object
const router = express.Router();

// register
router.post("/register", registerController);
// login
router.post("/login", loginController);

//profile
router.get("/profile", isAuth, getUserProfileController);

//logout
router.get("/logout", isAuth, logoutController);

// uopdate profile
router.put("/profile-update", isAuth, updateProfileController);

// update profile pic
router.put("/update-picture", isAuth, singleUpload, updateProfilePicController);

// updte password
router.put("/update-password", isAuth, udpatePasswordController);
//export
export default router;
