import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } from 'graphql';

import { allBooksByAuthorId } from '../database';
import { bookType } from './book';

export const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(bookType),
      resolve: author => allBooksByAuthorId(author.id),
    },
  }),
});