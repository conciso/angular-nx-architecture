/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {TestData} from './app/rooms-repository';

const app = express();

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to backend!'});
});

app.use('/static', express.static('apps/fake-backend/src/assets'));

app.get('/api/rooms', (req, res) => {
  res.send(TestData.getAllRooms());
});

app.get('/api/room/:id', (req, res) => {
  res.send(TestData.getRoom(req.params.id));
});

const port = process.env.port || 3030;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
