
import { Connection, createConnection } from "typeorm";
import { Users } from "./entities/users";

class Database {
    public async getDb(): Promise<Connection> {
        const connection = await createConnection({
            type: 'mysql',
            host: "localhost",
            port: 3306,
            username: "root",
            database: "test",
            password: "1Qazxsw2@",
            entities: [Users],
            ssl: false,
            synchronize: true
        })

        return connection;

    }
}

export default Database;


