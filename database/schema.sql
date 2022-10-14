CREATE TABLE assignment.customer(
	customerID INTEGER PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(25) NOT NULL,
	budget INTEGER NOT NULL
);

CREATE TABLE assignment.employee(
	employeeID INTEGER PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(25) NOT NULL,
	salary INTEGER NOT NULL,
	startdate DATE NOT NULL
);

CREATE TABLE assignment.agency(
    agencyID INTEGER PRIMARY KEY,
    agencyAddress VARCHAR(50),
    agencyCity VARCHAR (50),
    agencyZip INTEGER
);

CREATE TABLE assignment.property(
    propertyID INTEGER PRIMARY KEY,
    propertyAddress VARCHAR(50),
    propertyCity VARCHAR (50),
    propertyZip INTEGER,
    propertyPrice INTEGER
);