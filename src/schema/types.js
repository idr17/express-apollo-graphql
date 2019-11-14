const { gql } = require('apollo-server')

const typeDefs = gql`
type Query { 
  books: [Book],
  book(id:ID!): Book,
  authors: [Author],
  author(id:ID!): Author
 }
type Book { 
  id: Int!, 
  title: String, 
  author: Author
},
type Author {
  id: Int!,
  name: String
}
`;

module.exports = typeDefs