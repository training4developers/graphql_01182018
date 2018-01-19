import { GraphQLSchema } from 'graphql';

import { query } from './types/query';
import { mutation } from './types/mutation';

export const schema = new GraphQLSchema({
  query, mutation,
});