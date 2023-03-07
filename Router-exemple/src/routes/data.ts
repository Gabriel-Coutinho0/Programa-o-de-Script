import { Router } from "express";
import {data} from "../controllers";

const routes = Router();

routes.get("/day",data.dia)
routes.get("/month",data.mes)
routes.get("/year",data.ano)

export default routes;