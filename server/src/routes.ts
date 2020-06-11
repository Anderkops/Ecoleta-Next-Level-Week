import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// GET
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index); // index: Usado para listar varios
routes.get('/points/:id', pointsController.show); //show: Usado para listar 1 unico id de item

// POST
routes.post('/points', pointsController.create);

 
export default routes;

// Daria pra usar os padrões de projeto
// Service Pattern
// Repository Patter (Data Mapper)