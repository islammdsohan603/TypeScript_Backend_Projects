import { Router } from "express";
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers";

const bookRouter = Router();

// GET all books
bookRouter.get("/get-books", getBooks);

// POST new book
bookRouter.post("/add-book", addBook);
// Update  book
bookRouter.put("/update-book/:id", updateBook);
// Delete  book
bookRouter.delete("/delete-book/:id", deleteBook);

export default bookRouter;
