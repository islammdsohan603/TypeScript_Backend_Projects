import { Router } from "express";
import { getBooks, addBook } from "../controllers/bookControllers";

const bookRouter = Router();

// GET all books
bookRouter.get("/get-books", getBooks);

// POST new book
bookRouter.post("/add-book", addBook);

export default bookRouter;
