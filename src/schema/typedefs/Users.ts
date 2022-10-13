import { GraphQLID, GraphQLObjectType, GraphQLScalarType, GraphQLString } from 'graphql';

export const user_type = new GraphQLObjectType({
    name: 'User',
    fields: {
        ID: { type: GraphQLID },
        name: { type: GraphQLString },
        phn: { type: GraphQLString }
    }
})