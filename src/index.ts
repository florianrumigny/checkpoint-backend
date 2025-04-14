import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { dataSourceCheckpoint } from "./config/db";

async function start() {
  await dataSourceCheckpoint.initialize();

  //  TODO: build schema with typegraphql (resolvers)

  // TODO: Create apollo server with schema``

  // TODO: create startstandaloneserver
}

start();
