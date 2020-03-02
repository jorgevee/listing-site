import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

const port = 9000;

const mount = (app: Application) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app, path: "/api" });
  app.listen(port);

  console.log(`[app]: http://localhost:${port}`);
};

mount(express());
