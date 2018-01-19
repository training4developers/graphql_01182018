import { GraphQLObjectType } from 'graphql';

import { bookType } from './book';

export const authorType = new GraphQLObjectType({

  name: 'Author',
  fields: () => ({

    books: {
      type: new GraphQLList(bookType),
      resolve: book => {
        return authors.find(author => author.id === book.authorId);
      }
    }


  }),

});