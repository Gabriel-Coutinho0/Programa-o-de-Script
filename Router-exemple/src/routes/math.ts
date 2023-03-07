import { Router } from "express";
import {math} from "../controllers";

const routes = Router();

routes.get("/add", math.somar)
routes.get("/sub",math.sub)


export default routes;