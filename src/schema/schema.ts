export const typeDefs = `#graphql

  type Query{
    users: [User]!
  }
  enum Gender{
    MALE
    FEMALE
  }
  type User{
    id:ID!
    name:String!
    age:Int
    gender:Gender!
  }
   
`;
