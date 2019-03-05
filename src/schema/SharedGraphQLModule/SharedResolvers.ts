// import { GraphQLScalarType } from 'graphql';
// import { Kind } from 'graphql/language';

const SharedResolvers = {
  // DateTime: new GraphQLScalarType({
  //   name: 'DateTime',
  //   description: 'DateTime custom scalar type',
  //   // value from the client
  //   parseValue: (value: string) => new Date(value),
  //   // value sent to the client
  //   serialize: (value: Date) => value.getTime(),
  //   // ast value is always in string format
  //   parseLiteral: (ast) => (ast.kind === Kind.INT ? new Date(ast.value) : null),
  // }),
  // Location: new GraphQLScalarType({
  //   name: 'Location',
  //   description: 'Location custom scalar type',
  //   // value from the client
  //   parseValue: (value: string) => value,
  //   // value sent to the client
  //   serialize: (value: Date) => value,
  //   // ast value is always in string format
  //   parseLiteral: (ast) => (ast.kind === Kind.OBJECT ? ast : null),
  // }),
};

export default SharedResolvers;
