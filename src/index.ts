import app from "./app";

//import { getDb } from "./data-source";

async function main() {
    try {
        app.listen(3000)
        console.log("connected")
    }catch(error){
        console.log(error)
    }
}

main()