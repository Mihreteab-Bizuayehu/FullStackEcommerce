import express from "express";
import dotenv from 'dotenv';
dotenv.config()


const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`The server running at http://localhost:${port}.`);
})