const express = require('express');
const todoRouter = express.Router();
const todoController = require("../controllers/todoController");
const authenticateUser = require('../middleware/authMiddleware');
todoRouter.get('/', authenticateUser, todoController.getAllTodos);
todoRouter.post('/', authenticateUser, todoController.createTodo);
todoRouter.patch('/:id', authenticateUser, todoController.updateTodo);
todoRouter.delete('/:id', authenticateUser, todoController.deleteTodo);
module.exports = todoRouter;