export const typeDefs = `#graphql

type Query{
  "Array of curated listings to feature on the homepage"
  featuredListings: [Listing!]!
  products: [Product]!
  post:  Post 
  greeting(name:String!): String
  sum(num1:Int,num2:Int): Int
  sumOfArr(numbers:[Int!]!): Int!
 }

   type Listing{
   #  id: ID!
    title:  String!
    numOfBeds:Int
    costPerNight: Float
    closedForBookings: Boolean
 }
type Product{
  title: String
  price: Int
  releaseyear: Int
  rating:Float
  inStock: Boolean
}

type Post{
  id: ID!
  title: String!
  body:String
  published: Boolean
}
`;
