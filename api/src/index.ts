import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import productRoutes from "./routes/product.index";
import authRoutes from "./routes/auth.index";


const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);
app.use("/api", productRoutes);

app.listen(port, () => {
    console.log(`The server running at http://localhost:${port}.`);
})