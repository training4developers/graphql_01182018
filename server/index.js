import http from 'http';
import express from 'express';
import graphqlHttp from 'express-graphql';
import cors from 'cors';
import { schema } from './schema';

const port = 3020;

const app = express();

app.use(cors());

app.use('/', graphqlHttp({
  schema,
  pretty: true,
  graphiql: true,
  context: {
    baseUrl: 'http://localhost:3010'
  }
}));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`widgets graphql server stated on port ${port}`);
});   