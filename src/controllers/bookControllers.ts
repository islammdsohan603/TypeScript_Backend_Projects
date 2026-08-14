import { Request, Response } from "express";
import Book from "../models/Book";

// =========================
// Get All Books
// =========================

export const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =========================
// Add New Book
// =========================

export const addBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, author, publishYear, description } = req.body;

    const book = await Book.create({
      name,
      author,
      publishYear,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: book,
    });
  } catch (error) {
    const err = error as Error;

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
