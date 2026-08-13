import { Router, Request, Response } from "express";

const bookRouter = Router();

bookRouter.get("/get-books", (req: Request, res: Response) => {
  return res.json({
    success: false,
    message: "book not found",
  });
});

export default bookRouter;
