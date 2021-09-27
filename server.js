const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const ListPrompt = require("inquirer/lib/prompts/list");
//const db = require("./db/Database/db")

const connection = mysql.createConnection({
    port: 3001,
    host: "localhost",
    user: "root",
    password: "",
    database: "employees_db"
})


const db = {
    viewAllEmployees: () => {
        connection.query("SELECT * FROM employee", (error, results, fields) => {
            console.log(results)
        })

    }
}
module.exports = db


const init = () => {
    console.log("hello")
    inquirer.prompt(
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
    ).then(data => {
        console.log(data.userChoice)
        if (data.userChoice === "view all employees") {
            viewEmployees();
        } else if (data.userChoice === "view all roles") {
            viewRoles();
        } else if (data.userChoice === "view all departments") {
            viewDepartments();
        } else if (data.userChoice === "Add Department") {
            addDepartment();
        } else if (data.userChoice === "Add Employee") {
            addEmployee();
        } else if (data.userChoice === "Delete Employee") {
            deleteEmployee();
        } else if (data.userChoice === "Update EmpRole") {
            updateEmpRole();
        } else if (data.userChoice === "Leave") {
            connection.end();
        }
    }).catch(error => {
        console.log(error)
    })
}

function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        console.log(`EMPLOYEES:`)
        res.array.forEach(employee => {
            console.log(`ID: ${employee.id} | Name: ${employee.firstname} ${employee.lastname}| Role Id: ${employee.role_id}`);
        })
        start();
    });
};

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        console.log(`ROLES:`)
        res.array.forEach(role => {
            console.log(`ID: ${role.id} | Title: ${role.title} ${role.salary}| Department Id: ${role.department_id}`);
        })
        start();
    });
};

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        console.log(`DEPARTMENT:`)
        res.array.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`);
        })
        start();
    });
};

function addDepartment() {
    inquirer.prompt({
        name: "newDepartment",
        type: "input",
        message: "Enter new department",

    }).then(function (response) {
        var query = "INSERT INTO deparment (name) VALUES ()";
        connection.query(query, answer.department, function (err, response) {
            console.log("added a new database")
        })
        viewDepartments();
    })


}

function addEmployee() {
    connection.query("SELECT * FROM role", function (err, results) {
        inquirer.prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is their First Name?",
            },
            {
                name: "lastName",
                type: "input",
                message: "What is their last name?",
            },
            {
                name: "role",
                type: "list",
                message: "what is the role of this employee?",
                choices: function () {
                    rolesArr = [];
                    results.forEach(results => {
                        rolesArr.push(
                            results.title
                        );
                    })
                    return rolesArr;
                }
            }
        ]).then(function (response) {
            var query = "INSERT INTO employee (name) VALUES ()";
            connection.query(query, answer.employee, function (err, response) {
                console.log("added a new employee")
            })
            viewEmployees();
        });
    });
}
function updateEmpRole() {
    let employee = [];
    let rolesArr = [];
    connection.query("SELECT id, title FROM role ORDER BY title ASC"),
        inquirer.prompt([
            {
                name: "employeeName",
                type: "list",
                message: "Which employee needs to be changed",
                choices: employee
            }]).then(function (answer) {
                console.log("answer");
                const name = answer.employeeName;
            })
    connection.query("SELECT * FROM role", function (err, res) {
        inquirer.prompt([
            {
                name: "role",
                type: "list",
                message: "what is the Employees new role?",
                choices: rolesArr
            },
        ]).then((answer) => {
            let role_id;
            let employee;
            for (i = 0; i < rolesArr.length; i++) {
                if (answer.role == roles[i].title) {
                    role_id = roles[i].id;
                }
            }
            for (i = 0; i < rolesArr.length; i++) {
                if (answer.employee == employee[i].Employee) {
                    employee = employee[i].id;
                }
            }
            connection.query(`UPDATE employee SET role_id = ${role} WHERE id = ${employee}`, (err, res) => {
                if (err) return err;
                console.log("role Updated")
            });
        });
    });
}
function deleteEmployee() {
    let employeeArr = [];
    inquirer.prompt([
        {
            name: "employee",
            type: "list",
            message: "which employee would you like to delete?",
            choices: employeeArr
        },
        {
            name: "confirmation",
            type: "list",
            message: "confirm deletion",
            choices: ["YES", "NO"]
        }
    ]).then((answer) => {
        if (answer.confirmation == "YES") {
            let employee;
            for (i = 0; i < employee.length; i++) {
                if (answer.employee == employee[i].employee) {
                    employeeId = employee[i].id;
                }
            }
            connection.query(`DELETE FROM employee WHERE id="${answer.employee}" DELETED...\n`);
        }
        else {
            console.log("employee not deleted");
        }
    }
    }
    init();
