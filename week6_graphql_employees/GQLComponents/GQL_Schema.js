const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Employee {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    gender: String!
    city: String!
    designation: String!
    salary: Float!
  }

  type Query {
    getEmployees: [Employee]

    getEmployeeByCity(city: String!): [Employee]

    getEmployeeByFirstName(firstName: String!): [Employee]

    getEmployeeByID (id: ID!): Employee
  }

  type Mutation {
    addEmployee(
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!
    ) : Employee

    deleteEmployee(id: ID!) : Employee
    updateEmployee(
        firstname: String!
        lastname: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!
    ) : Employee
    }
`;
