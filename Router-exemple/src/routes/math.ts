import { Router } from "express";
import {math} from "../controllers";
import { authAdmin } from "../middlewares";

const routes = Router();

routes.get("/add", math.somar)
routes.get("/sub",authAdmin,math.sub)


export default routes;