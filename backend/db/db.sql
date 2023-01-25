CREATE DATABASE IF NOT EXISTS trineoviajes;

USE trineoviajes;

CREATE TABLE orders (
    id INT(11) NOT NULL AUTO_INCREMENT,
    resid VARCHAR(6),
    email VARCHAR(45) DEFAULT NULL,
    trips VARCHAR(200) DEFAULT NULL,
    totalPrice INT(20) DEFAULT NULL,
    PRIMARY KEY (id)
);

show databases;
show tables;
describe orders;
-- SELECT * FROM orders;

INSERT INTO orders VALUES
    ( 1, "1YRH72", "francofeno26@gmail.com", "Ciudad: Puerto Iguazu, Precio: $52000, Cantidad: 1", 52000 ),
    (2, "W7Ctcc", "franco-fenoglio@hotmail.com", "Ciudad: San Miguel de Tucuman, Precio: $80000, Cantidad: 1", 80000);

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(45) DEFAULT NULL,
    password VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users VALUES 
    (1, "francofeno26@gmail.com", "abcdefg");