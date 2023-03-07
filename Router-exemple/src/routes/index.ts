import data from "./data"
import math from "./math";
import { Router } from "express";

const routes = Router();

routes.use("/date",data);
routes.use("/math",math);




export default routes;