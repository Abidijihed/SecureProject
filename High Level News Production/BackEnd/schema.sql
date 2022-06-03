DROP DATABASE IF EXISTS secure;
CREATE DATABASE IF NOT EXISTS secure;
USE secure;

CREATE TABLE IF NOT EXISTS register(
id INT NOT NULL AUTO_INCREMENT,
FirstName VARCHAR(200),
LastName VARCHAR (200),
Email text ,
Password VARCHAR (200),
confirmPassword VARCHAR (200),
PhoneNumber VARCHAR(255),
image VARCHAR(255),
country VARCHAR(20),
State VARCHAR(250),
Zip VARCHAR(250),
Address VARCHAR(255),
PRIMARY KEY (id)
);
CREATE TABLE sessions(
    id int NOT NULL AUTO_INCREMENT,
   register_id int NOT NULL ,
    session varchar(250) NOT NULL,
    date varchar(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (register_id) References register(id)
);
CREATE TABLE IF NOT EXISTS postes(
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(50) NOT NULL,
    namee varchar(50) NOT NULL,
    imageUrl varchar(255) NOT NULL,
    createdAt VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    video VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS nuser(
    id INT NOT NULL AUTO_INCREMENT,
   password VARCHAR(255),
   email text ,
    PRIMARY KEY (id)
);


