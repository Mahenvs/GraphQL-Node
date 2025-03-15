import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { typeDefs } from "./schema/schema.js";
import { USER_DATA } from "./db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: (parent, args, ctx) => {
      if (!args.query) return [];
      const searchString = args.query;
      return USER_DATA.filter((user) =>
        user.name.toLowerCase().startsWith(searchString.toLowerCase())
      );
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

async function startServer() {
  await server.start();

  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  const serve = app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
}

startServer();
