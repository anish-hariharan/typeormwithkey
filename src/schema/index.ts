import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { create_user } from "./mutation/create";
import { findall, Greeting } from "./queries/greeting";


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        greetimg: Greeting,
        finding: findall
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        create: create_user
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})