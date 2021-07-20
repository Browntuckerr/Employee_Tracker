const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
//const db = require("./db/Database/db")

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


const init =() =>{
    console.log ("hello")
    inquirer.prompt([
        {
            name: "userChoice",
            type: "list",
            message: "Please make a selection",
            choices: [
                "view all employees",
                "view all roles",
                "view all departments",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Delete Employee",
                "Update Employee",
                "Leave"
            ]
        }
    ]).then (data => {
        console.log (data.userChoice)
        if (data.userChoice === "view all employees")
        {
            //db.viewAllEmployees()
        }else if(data.userChoice === "view all roles")
        {
            console.log ("view all roles")
        }else if (data.userChoice === "view all departments")
        {
            console.log ("view all departments")
        }else if (data.userChoice === "Add Department")
        {
            console.log ("Add Department")
        }else if (data.userChoice === "Add Employee")
        {
            console.log ("Add Employee")
        }else if (data.userChoice === "Delete Employee")
        {
            console.log ("Delete Employee")
        }else if (data.userChoice === "Update Employee")
        {
            console.log ("Update Employee")
        }else if (data.userChoice === "Leave")
        {
            console.log ("Leave")
        }
    }).catch (error =>{
        console.log (error)
    })
} 

const addDepartment = () =>{
    inquirer.prompt({
        name:"newDepartment",
        type:"input",
        message: "Enter new department",
        
    }).then(response =>{
        {name: response.newDepartment}
        (error,response) =>{
            if (error) throw error;
            console.log("${response.newDepartment} department added");
            this.viewAllEmployees();
        }
    });
}
init()

