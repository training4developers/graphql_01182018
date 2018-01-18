import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const employeeType = new GraphQLObjectType({

  name: 'Employee',
  description: 'An employee object',
  fields: {
    firstName: {
      type: GraphQLString,
      // resolve: (employee) => employee.firstName,
    },
    lastName: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  },

});