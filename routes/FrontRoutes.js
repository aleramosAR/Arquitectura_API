import express from "express";
import {
  redirectExitController,
  goIndexController
} from '../controllers/FrontControllers.js'

const router = express.Router();

router.get('/', redirectExitController);
router.get("/index", goIndexController);

export default router;