import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    lastName: String!
    address: String!
    phone: String!
    country: String!
  }

  type Mutation {
    createUser(
      name: String!
      lastName: String!
      address: String!
      phone: String!
      country: String!
    ): User!
  }
`;
