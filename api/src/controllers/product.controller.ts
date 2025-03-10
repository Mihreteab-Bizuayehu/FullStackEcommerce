import { Request, Response } from "express";

export const getAllProducts = (req:Request,res:Response) => {
    res.send({ message: "List of Products" });
}
export const getProductById = (req:Request,res:Response) => {
    res.send({ message: `A product with id: ${req.params.id}` });
}
export const createProduct= (req:Request,res:Response) => {
    res.send({ message: `A product is created successfully!` });
}
export const updateProduct= (req:Request,res:Response) => {
    res.send({ message: `A product with id ${req.params.id} is updated successfully!` });
}
export const deleteProduct= (req:Request,res:Response) => {
    res.send({ message: `A product with id ${req.params.id} is deleted successfully!` });
}