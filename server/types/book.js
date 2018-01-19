import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

import { authorType } from './author';

export const bookType = new GraphQLObjectType({

  name: 'Book',
  fields: () => ({

    author: {
      type: authorType,
      resolve: book => {
        return authors.find(author => author.id === book.authorId);
      }
    }


  }),

});