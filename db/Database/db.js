const mysql = require("mysql2")
const connection = mysql.createConnection({
    port: 3001,
    host: "localhost",
    user: "root",
    password: "",
    database: "Employees_db"
})
const db = {
    viewAllEmployees: () =>{
        connection.query("SELECT * FROM employee", (error, results, fields) => {
            console.log(results)
        })

    }
}
module.exports = db


