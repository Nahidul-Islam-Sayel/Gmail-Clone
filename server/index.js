import cors from 'cors';
import express from 'express';
import Connection from './database/db.js';
import routers from './routes/route.js';
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/',routers)
const port = 8000
Connection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})