import { Router } from "express";
import { getHorarioLaboral } from "../controllers/configuracionesController.js";

const configRoute = Router();

configRoute.get("/horarioLaboral", getHorarioLaboral);

export default configRoute;
