import { Router } from "express";
import router from "./product.routes";
import productRouter from "./product.routes";

const productRoutes = Router();

productRoutes.use('/products', productRouter);

export default productRoutes;