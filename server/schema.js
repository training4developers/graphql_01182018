import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Top-Level Query',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World!',
      },
    },
  }),
});