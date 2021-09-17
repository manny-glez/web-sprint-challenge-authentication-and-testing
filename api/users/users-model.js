const db = require('../../data/dbConfig');

function find() {
  return db('users')
  .select('u.id', 'u.username')
}

function findBy(filter) {
  return db('users as u')
    .select('u.id', 'u.username', 'u.password')
    .where(filter)
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findBy(id)
}

module.exports = {
  find,
  findBy,
  add,
}