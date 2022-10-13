import { GraphQLList, GraphQLString } from "graphql";
import Database from "../../data-source";
import { Users } from "../../entities/users";
import { user_type } from "../typedefs/Users";

export const Greeting = {
    type: GraphQLString,
    resolve: () => 'Hello'
}

export const findall = {
    type: new GraphQLList (user_type),
    async resolve() {
        const result = await new Database().getDb()
        const userRepo = result.getRepository(Users)
        return await userRepo.find()
    }
}