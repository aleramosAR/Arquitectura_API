import express from "express";
import { getMensajeController, postMensajeController } from '../controllers/MensajesControllers.js'

const router = express.Router();
router.use(express.json());

router.get("/", getMensajeController);
router.post("/", postMensajeController);

export default router;