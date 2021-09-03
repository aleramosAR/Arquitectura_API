import express from "express";
import {
  getProductsController,
  getProductController,
  postProductController,
  updateProductController,
  deleteProductController
} from '../controllers/ProductControllers.js'

const router = express.Router();
router.use(express.json());

router.get("/", getProductsController);
router.get("/:id", getProductController);
router.post("/", postProductController);
router.put("/actualizar/:id", updateProductController);
router.delete("/borrar/:id", deleteProductController);

export default router;