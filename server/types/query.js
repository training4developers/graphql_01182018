import {
  GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString,
} from 'graphql';

import { employeeType } from './employee';
import { bookType } from './book';
import { authorType } from './author';

import {
  allEmployees, oneEmployeeById,
  allBooks, oneBookById, oneBookByISBN, allBooksByGenre,
  allAuthors, oneAuthorById
} from '../database';

export const query = new GraphQLObjectType({

  name: 'Query',
  description: 'Query the graph',
  fields: () => ({
    employees: {
      type: new GraphQLList(employeeType),
      resolve: () => allEmployees(),
    },
    employee: {
      type: employeeType,
      args: {
        id: {
          type: GraphQLInt,
          description: 'Id of employee to retrieve',
        }
      },
      resolve: (_, { id }) => oneEmployeeById(id),
    },
    books: {
      type: new GraphQLList(bookType),
      resolve: () => allBooks(),
    },
    book: {
      type: bookType,
      args: {
        id: {
          type: GraphQLInt,
          description: 'Id of book to retrieve',
        }
      },
      resolve: (_, { id }) => oneBookById(id),
    },
    bookByISBN: {
      type: bookType,
      args: {
        isbn: {
          type: GraphQLString,
          description: 'ISBN of book to retrieve',
        }
      },
      resolve: (_, { isbn }) => oneBookByISBN(isbn),
    },
    booksByGenre: {
      type: new GraphQLList(bookType),
      args: {
        genre: {
          type: GraphQLString,
          description: 'Genre of book to retrieve',
        }
      },
      resolve: (_, { genre }) => allBooksByGenre(genre),
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve: () => allAuthors(),
    },
    author: {
      type: authorType,
      args: {
        id: {
          type: GraphQLInt,
          description: 'Id of author to retrieve',
        }
      },
      resolve: (_, { id }) => oneAuthorById(id),
    },
  }),

});