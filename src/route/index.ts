import { Router } from "express";
import bookRouter from "./bookRoute";

const router = Router();

router.use("/book", bookRouter);

export default router;
