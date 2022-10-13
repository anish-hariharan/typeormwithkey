import { GraphQLString, GraphQLID, GraphQLBoolean } from "graphql";
import { Users } from "../../entities/users";
import { user_type } from "../typedefs/Users";
import Database from "../../data-source";

export const create_user = {
    type: user_type,
    args: {
        ID: {type: GraphQLID},
        name: {type: GraphQLString},
        phn: {type: GraphQLString}
    },
    async resolver(_:any , args: Users){
        const { ID, name, phn } = args
        const dbconnection = await new Database().getDb()
        const userRepo =  dbconnection.getRepository(Users)
        const result = await userRepo.save({
            ID: ID,
            name: name,
            phn: phn
        })
        /*return {
            ID: ID,
            name: name,
            phn: phn
        }*/
        return result;

    }
}