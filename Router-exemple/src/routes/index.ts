import { Router, Request, Response } from "express";
import matematica from './math';
import data from "./data"
import { login } from "../controllers"
import { authorization } from "../middlewares";

const routes = Router()

routes.post("/login", login.logar);
routes.use("/date", data);
routes.use("/math", authorization, matematica);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;