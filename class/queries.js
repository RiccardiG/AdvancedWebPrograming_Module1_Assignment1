const {Client}  = require ('pg').Client;
const client = new Client({
    user: "johndoe",
    host: "localhost", 
    database: "user_db",
    password: "example1234",
    port: 5432,
})

const getUsers = (request, response)=>{
    client.query("SELECT * FROM users ORDER BY id ASC");
    if (error){
        throw error;
    }
    res.status(200).json(results.row);
}