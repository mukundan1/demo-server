const db = require('../config/db');


const getAllTodosByUser = async (userId) => {
    return db('todos').where({ user_id: userId }).select('*');
};

const createTodo = async (userId, title, description, done) => {
    const [id] = await db('todos').insert({ user_id: userId, title, description, done }).returning('id');
    return id;
};

const updateTodo = async (userId, todoId, updates) => {
    return db('todos').where({ id: todoId, user_id: userId }).update(updates);
};


const deleteTodo = async (userId, todoId) => {
    return db('todos').where({ id: todoId, user_id: userId }).del();
};

module.exports = { getAllTodosByUser, createTodo, updateTodo, deleteTodo };