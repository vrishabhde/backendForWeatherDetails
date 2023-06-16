import express from "express";
import { getAstro, getTemperature, register } from "../controllers/user_controller.js";
import { userAuthentication } from "../middleware/user_authentication.js";


const router = express.Router();

router.post("/register", register);
router.post("/userAuthentication", userAuthentication);
router.post("/getTemperature",userAuthentication, getTemperature);
router.post("/getAstro",userAuthentication, getAstro);

export default router;