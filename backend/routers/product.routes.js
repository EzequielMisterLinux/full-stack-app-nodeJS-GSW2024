import createNewProduct from "../controllers/product.controller.js";
import express from "express";
import updateProduct from "../controllers/update.product.controller.js";
import getAllProducts from "../controllers/product.getProduct.js";
import DeleteProduct from "../controllers/product.delete.js";

const Routes = express.Router()

Routes.post("/create-product", createNewProduct)
Routes.get("/obtener-todos-los-products", getAllProducts)
Routes.put("/update-product/:id", updateProduct)

Routes.delete("/borrar-producto/:id", DeleteProduct)

export default Routes