DROP database IF EXISTS businessBD;
CREATE DATABASE businessBD;
USE businessBD;

CREATE TABLE businessTable
(
	id int NOT NULL AUTO_INCREMENT,
	
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
    address varchar(255),
    comments varchar(500),
	PRIMARY KEY (id)
);
