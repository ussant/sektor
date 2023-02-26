import {buildSchema} from "graphql";

export const schema = buildSchema(`
  type Query {
    getUser(id: Int!): User!
    getAllUsersWithPagination(page: Int!): [User!]!
  }
  type Mutation {
    editUser(input: EditUserInput): User!
    login(input: LoginInput): Token!
    signUp(input: SignUpInput): Message!
  }
  input EditUserInput {
    id: Int!,
    firstName: String,
    lastName: String,
    email: String,
    photo: String, 
    gender: String
  }
  input LoginInput {
    email: String!,
    password: String!
  }
  input SignUpInput {
    firstName: String!,
    password: String!,
    email: String!
  }
  scalar Date
  type User {
    id: Int!,
    firstName: String,
    lastName: String,
    photo: String,
    gender: String,
    hashedPassword: String,
    registrationDate: Date,
  }
  type Token {
    token: String!,
  }
  type Message {
    message: String!
  }
`);
