import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';

import { oneAuthorById } from '../database';

import { authorType } from './author';

export const bookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    isbn: { type: GraphQLString },
    copyrightYear: { type: GraphQLInt },
    author: {
      type: authorType,
      resolve: book => oneAuthorById(book.authorId),
    }
  }),
});