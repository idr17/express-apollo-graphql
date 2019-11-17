const { gql } = require('apollo-server')

const typeDefs = gql`
type Query { 
  posts: [Post],
  post(id:ID!): Post,
  comments: [Comment],
  comment(postid:ID!): [Comment] 
  commentbyid(commentid:ID!): Comment
 }
 type Mutation {
  createpost(title: String!, body: String!, userId: Int!): Post,
  updatepost(id: Int!, title: String!, body: String!, userId: Int!): Post
  deletepost(id: Int!): Message
 },
type Post { 
  id: Int!, 
  userId: Int,
  title: String,
  body: String
},
type Comment {
  id: Int!,
  postId: Int,
  name: String,
  email: String,
  body: String
},
type Message {
  message: String,
  status: Int
}
`;

module.exports = typeDefs