USE Employees_db;

INSERT INTO department (name)
VALUES ("Pixar Studios"),
("Walt Disney Animation"),
("Disney Parks");

INSERT INTO role (title, salary, department_id)
VALUES ("Chairman",  15000000, 1),
("Vice President", 10000000, 2),
("Park Manager", 1000000, 3)
("Team Leader", 500000, 4),
("Cast Member", 45000, 5),
("Janitor", 10000, 6);

INSERT INTO employee (firstname, lastname, role, manager)
VALUES ("Mickey", "Mouse", 1, 1),
("Donald", "Duck", 2, null),
("Minnie", "Mouse", 2, 1),
("Buzz", "Lightyear", 3, 1),
("Bo", "Peep", 3, null),
("John", "Smith", 5, null),
("Obi-Wan", "Kenobi", 4, 1),
("Stinky", "Pete", 6, null);



