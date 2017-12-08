-- Create the database burgers_db and specified it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(45) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);