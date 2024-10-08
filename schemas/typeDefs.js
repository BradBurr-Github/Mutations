const typeDefs = `
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    class(id: ID!): Class
  }

  type Mutation {
    addSchool(name: String!, location: String!, studentCount: Int!): School
    addClass(name: String!, building: String!, creditHours: Int!, professor: String! ): Class
    # Define the required parameters for updating a class
    updateClass(id: ID!, building: String!): Class
  }
`;

module.exports = typeDefs;
