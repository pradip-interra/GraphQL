const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const bodyParser = require("body-parser");
const cors = require("cors");
const { importSchema } = require("graphql-import");
const { Query } = require("./logic/query");
const { Mutation } = require("./logic/mutation");

async function startServer() {
  const app = express();

  // Load the schema from the file
  const typeDefs = importSchema("**/schemas/*.graphql");
  const resolvers = { ...Query,  ...Mutation };

  const server = new ApolloServer({
    // The Schema definition is like the Object Model in REST
    typeDefs,

    // Resolver in GraphQL is like the Route Equivalent in REST
    resolvers,
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => console.log("Serevr Started at PORT 8000. Access via: http://localhost:8000/graphql"));
}

startServer();
