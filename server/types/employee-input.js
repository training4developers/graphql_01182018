import {
  GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLID
} from 'graphql';


const fields = {
  firstName: { type: GraphQLString },
  lastName: { type: GraphQLString },
  age: { type: GraphQLInt },
};

export const employeeInsertInputType = new GraphQLInputObjectType({
  name: 'EmployeeInsertInput',
  fields: () => fields,
});

export const employeeReplaceInputType = new GraphQLInputObjectType({
  name: 'EmployeeReplaceInput',
  fields: () => Object.assign({ id: { type: GraphQLID } }, fields),
});