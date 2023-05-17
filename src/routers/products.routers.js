import { Router } from "express";
import {
  createProduct,
  findAllProducts,
  findProductsById,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/api/products", findAllProducts);
router.get("/api/products/:id", findProductsById);
router.post("/api/products", createProduct);

export default router;
