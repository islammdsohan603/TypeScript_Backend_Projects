import { Router } from "express";
import bookRouter from "./bookRoute";

const routers = Router();

routers.use("/book", bookRouter);

export default routers;
