const db = require('../database/dbConfig');

module.exports = {
    add,
    findById,
    find,
    findBy,
    findByUserName
};

function find(){
    return db('users').select('id', 'username', 'password', 'role');
}

function findBy(filter){
    return db('users')
    .where(filter);
}
async function add(user){
    const [id] = await db('users').insert(user);
    return findById(id);
};

function findById(id){
    return db('users')
    .where({id})
    .first();
};

function findByUserName(username){
    return findBy({username}).first();
}

