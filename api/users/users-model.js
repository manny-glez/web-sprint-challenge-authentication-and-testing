const db = require('../../data/dbConfig');

async function add(user) {
  const [id] = await db('users').insert(user);
  return findBy(id)
}

function findBy() {
  return null
}

module.exports = {
  add,
  findBy
}