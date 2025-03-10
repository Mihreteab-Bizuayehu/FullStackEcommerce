import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
  res.send({ message: 'sign up' });
};
export const login = (req: Request, res: Response) => {
  res.send({ message: 'sign in' });
};