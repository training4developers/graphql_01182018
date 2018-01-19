import {
  GraphQLObjectType, GraphQLList, GraphQLInt,
} from 'graphql';

import { employeeType } from './employee';

// const employees = [
//   { id: 1, firstName: 'Bob', lastName: 'Smith', age: 34 },
//   { id: 2, firstName: 'Jane', lastName: 'Thomas', age: 45 },
// ];

import { getAllEmployees } from '../database';

export const query = new GraphQLObjectType({

  name: 'Query',
  description: 'Query the graph',
  fields: {
    employees: {
      type: new GraphQLList(employeeType),
      resolve: () => getAllEmployees(),
    },
    employee: {
      type: employeeType,
      args: {
        id: {
          type: GraphQLInt,
          description: 'Id of employee to retrieve',
        }
      },
      resolve: (_, args) => {
        //  return employees.find(e => e.id === args.id);
      },
    }
  },

});