import { GraphQLObjectType } from 'graphql';

import { employeeType } from './employee';
import { employeeInsertInputType } from './employee-input';

import { insertEmployee } from '../database';

export const mutation = new GraphQLObjectType({

  name: 'Mutation',

  fields: () => ({

    insertEmployee: {
      type: employeeType,
      args: {
        employee: {
          type: employeeInsertInputType,
        }
      },
      resolve: (_, { employee }) => {

        return insertEmployee(employee);

      },
    }


  })

});