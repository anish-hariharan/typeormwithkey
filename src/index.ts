import { User} from "./Users"
import "reflect-metadata"
import { createConnection } from "typeorm";

createConnection().then(async connection => {

    console.log("working...");
    const user = new User();
    user.firstname = "Anish ";
    user.lastname ="Hariharan ";
    user.age = 20;

    await connection.manager.save(user);
    console.log("saved ")

    const users = await connection.manager.find(User);
    console.log(users);
}).catch(error => console.log(error));
