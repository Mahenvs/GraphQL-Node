export const typeDefs = `#graphql

  type Query{
    users(query:String): [User]!
    usersByOrder(sortBy:ORDER!):[User]!
    
    # Get All Posts
    posts:[Post]!

    # Get Posts if it contains the string
    postsByQuery(query:String):[Post]
  }
  enum ORDER{
    ASC
    DESC
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
   
  type Post{
    id:ID!
    title: String!
    body: String
    published:Boolean
  }
`;
