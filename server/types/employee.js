import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';

export const employeeType = new GraphQLObjectType({

  name: 'Employee',
  description: 'An employee object',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),

});