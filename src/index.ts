import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { dataSourceCheckpoint } from "./config/db";
import CountryResolver from "./resolver/CountryResolver";

async function start() {
  await dataSourceCheckpoint.initialize();

  //  TODO: build schema with typegraphql (resolvers)

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  // TODO: Create apollo server with schema

  const server = new ApolloServer({
    schema,
  });

  // TODO: create startstandaloneserver

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

start();
