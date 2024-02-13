import express from 'express'
import dotenv from 'dotenv';

import { findByCoordinates, findByIP } from './AdController'
import { initData } from './helpers';
const app = express()
dotenv.config();

const port = process.env.PORT

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/pages/index.html")
})

app.get("/ads/:latitude/:longitude", findByCoordinates)
app.get("/ads/ip", findByIP)

app.listen(port, () => {
  initData();

  console.log(`Running on http://localhost:${port}`)
})