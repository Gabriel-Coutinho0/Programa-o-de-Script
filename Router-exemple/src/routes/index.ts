import data from "./data"
import math from "./math";
import Login from "../controllers/Login";
import { Router, Request,Response } from "express";

const routes = Router();

routes.use("/date",data);
routes.use("/math",math);
routes.post("/login",Login.login)

routes.use((req:Request,res: Response)=>res.json({error:"Requisição desconhecida"}))

export default routes;