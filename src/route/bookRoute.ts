import { Router, Request, Response } from "express";

const bookRouter = Router();

bookRouter.get("/get-books");

export default bookRouter;
