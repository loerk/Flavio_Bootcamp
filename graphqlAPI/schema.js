const graphql = require("graphql");
//object distructuring:
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

//graphQLSchema instance containing an Object with query property
const schema = new GraphQLSchema({
  query: GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
    },
  }),
});

module.exports = schema;
