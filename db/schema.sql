### Schema

CREATE DATABASE y6is3i6fk8gxu1zi;
USE y6is3i6fk8gxu1zi;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
