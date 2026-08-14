import { Request, Response } from "express";

export const getBooks = async (req: Request, res: Response) => {
  try {
    console.log("sohan");
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const { name, author, publishYear, description } = req.body;
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
