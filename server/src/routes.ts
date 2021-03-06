import express from "express";
import knex from "./database/connection";

import PointsController from "./controllers/PointsController";
const pointsController = new PointsController();

import ItemsController from "./controllers/ItemsController";
const itemsController = new ItemsController();

const routes = express.Router();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

//index, show, create, update, delete

export default routes;
