import { GraphQLSchema } from 'graphql';

import { query } from './types/query';

export const schema = new GraphQLSchema({
  query,
});