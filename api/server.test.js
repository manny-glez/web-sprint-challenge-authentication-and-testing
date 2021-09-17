// Write your tests here
const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

test('sanity', () => {
  expect(true).not.toBe(false)
})

// beforeAll(async () => {
//   await db.migrate.rollback()
//   await db.migrate.latest()
// })
// beforeEach(async () => {
//   await db.seed.run()
// })
// afterAll(async () => {
//   await db.destroy()
// })


describe('[GET] /', () => {
  let res 
  beforeEach(async () => {
    res = await request(server).get('/')
  })
  test('responds with a 200 OK', async () => {
    expect(res.status).toBe(200)
  })
  test('responds with all jokes', async () => {
    expect(res.body).toHaveLength(3)
    expect(res.body).toMatchObject([
      { id: "0189hNRf2g", joke: "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later." },
      { id: "08EQZ8EQukb", joke: "Did you hear about the guy whose whole left side was cut off? He's all right now." },
      { id: "08xHQCdx5Ed", joke: "Why didn’t the skeleton cross the road? Because he had no guts." },
    ])
  })
})
