CREATE DATABASE dashboard;

USE dashboard;

CREATE TABLE Spending (
    id INT NOT NULL auto_increment,
    dayMonth VARCHAR(30) NOT NULL,
    cost INT NOT NULL,
    category VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;