import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { typeDefs } from "./schema/schema.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    featuredListings: () => [
      {
        title: "feature List",
        numOfBeds: 1,
        costPerNight: 21.1,
        closedForBookings: true,
      },
    ],
    products: () => [
      {
        title: "product1",
        price: 20,
        inStock: true,
        releaseYear: 2020,
        rating: 4.1,
      },
    ],
    post: () => ({
      id: 1,
      title: "This is my first post",
      body: "First post",
      published: true,
    }),
    greeting(parent, args, ctx) {
      return `${args.name} "Hello"`;
    },
    sum: (parent, args, ctx) => {
      return args.num1 + args.num2;
    },
    sumOfArr: (parent, args, ctx, info) => {
      if (args.numbers.length === 0) return 0;
      return args.numbers.reduce((acc, currentVal) => {
        return acc + currentVal;
      });
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
