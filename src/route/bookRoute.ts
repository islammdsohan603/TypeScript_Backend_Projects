import { Router, Request, Response } from "express";
import { getBooks } from "../controllers/bookControllers";

const bookRouter = Router();

bookRouter.get("/get-books", getBooks);

export default bookRouter;
