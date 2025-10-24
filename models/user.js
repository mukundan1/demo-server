const db = require('../config/db');

const createUser = async (email, username, password) => {
    return db('users').insert({ email, username, password });
};


const findUserByEmail = async (email) => {
    return db('users').where({ email }).first();
};


const findUserById = async (id) => {
    return db('users').where({ id }).first();
};

module.exports = { createUser, findUserByEmail, findUserById };