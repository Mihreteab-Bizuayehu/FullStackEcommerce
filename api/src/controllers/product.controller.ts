import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { db } from "src/config";
import { products } from "src/models/productsSchema";



export const getAllProducts = async (req: Request, res: Response) => {
  try {
      const productList = await db
          .select()
          .from(products);
    if (productList.length) {
        res.status(404).json({ message: "There is no product in products table!" });
    }
    else {
        res.status(200).json({ Products: productList });
      }
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get products' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const product = await db.select().from(products).where(eq(products.id, id));
        if (!product.length) {
            res.status(404).json({message:`The product with id ${id} is not found!`})
        }
        else {
            res.status(200).json({ Product: product });
        }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to get product!` });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const existedProduct = await db.select().from(products).where(eq(products.name, name));
    if (existedProduct.length) {
      res.status(400).json({ message: `${name} is already existed!` });
    }
    else {
      const createdProduct = await db
        .insert(products)
        .values(req.body)
        .returning({ Id: products.id });
      res.status(201).json({ product: createdProduct });
}
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create product' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const existedProduct = await db.select().from(products).where
        (eq(products.id, id));
      
    if (!existedProduct.length) {
      res
        .status(404)
        .json({
          message: `The product with id ${Number(
            req.params.id
          )} is not available!`,
        });
    }
    else {
      await db.update(products).set({
          name:req.body.name,
          description:req.body.description,
          image:req.body.image,
          price:req.body.price,
      }).where(eq(products.id, id));

        res.status(200).json({ product:"You updateed successfully!" });
    }
    }
    catch (error) {
    console.error(error);
    res.status(500).json({message: `Failed to update product with id ${Number(req.params.id)}!`});
  }
};

export const deleteProduct = async (req: Request, res: Response) => {

  try {
      
        const id = Number(req.params.id);
      const existingProduct = await db
        .select()
        .from(products)
        .where(eq(products.id, id));
      
      if (!existingProduct.length) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      else {
          await db
             .delete(products)
             .where(eq(products.id, id));
         res
           .status(200)
           .json({
             message: `The product with id ${id} is deleted successfully!`,
           });
    }
    
    }
    catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete product!' });
  }

};