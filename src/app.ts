import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const startServer = async () => {
  const app = express();
  app.use(cors());

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;

  httpServer.listen({ port: PORT }, () => {
    console.log(
      `🚀 Server ready at port: ${PORT} on path: ${server.graphqlPath}`
    );
  });
};

startServer();
