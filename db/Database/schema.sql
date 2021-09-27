DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id),
    REFERENCES department(id)
);

CREATE TABLE employee (
   id INTEGER NOT NULL AUTO_INCREMENT,
   firstname VARCHAR (30) NOT NULL,
   lastname VARCHAR (30) NOT NULL,
   role INT NULL,
   manager INT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY (role_id)
   REFERENCES role(id),
   FOREIGN KEY (manager_id)
   REFERENCES employee(id)

);