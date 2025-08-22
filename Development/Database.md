use user - create new db

show tables - show tables

Insert query????? 
INSERT INTO employee (name, age, address)
VALUES ('rajan', 29, 'delhi');

UPDATE query????? 
update employee set name = 'amit',  age = 26, address='lucknow' where id=7
update employee set salary = 1300 where id = 1;

Update column name and data type of that???? 
alter table employee rename column name to fullName
alter table employee add salary double

Where Query?????
SELECT * FROM Orders where customer_id = 1;

AND, OR, NOT ??????
SELECT * FROM Customers where customer_id = 1 and first_name= 'John' and age = 31;
SELECT * FROM Customers where customer_id = 4 or first_name= 'John' or age = 22;
SELECT * FROM Customers where not customer_id = 1;

Null Values?????????
SELECT * FROM Customers where age is null;
SELECT * FROM Customers where age is not null;

Delete???????/
delete FROM Customers where customer_id = 1;

Like????//
search for a specified pattern in a column
select  *  from employee where name like pattern

Wildcards???????/
A wildcard character is used to substitute one or more characters in a string.
%	Represents zero or more characters
_	Represents a single character
SELECT * FROM Customers where first_name like '%Jo%' ;

IN???????
SELECT * FROM Customers where age in(21, 22, 26) ;
SELECT * FROM Customers where age not in(21, 22, 26) ;
SELECT * FROM Customers where age in(select statement) ;

Between?????
SELECT * FROM Customers where age between 22 and 26;

Aggregate Function??????
SELECT max(age), first_name FROM Customers;
SELECT min(age), first_name FROM Customers;
SELECT count(age), first_name FROM Customers;
SELECT avg(amount), item FROM Orders;
SELECT sum(amount), item FROM Orders;

Having query??? 
The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.
SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country
HAVING COUNT(CustomerID) > 5;

ANY???
returns TRUE if ANY of the subquery values meet the condition
SELECT ProductName FROM Products WHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);
SQL statement lists the ProductName if it finds ANY records in the OrderDetails table has Quantity equal to 10

ALL???
returns TRUE if ALL of the subquery values meet the condition
SELECT ProductName FROM Products WHERE ProductID = ALL (SELECT ProductID FROM OrderDetails WHERE Quantity = 10);
SQL statement lists the ProductName if ALL the records in the OrderDetails table has Quantity equal to 10.

Exists query??? 
The EXISTS operator is used to test for the existence of any record in a subquery.
The EXISTS operator returns TRUE if the subquery returns one or more records.
SELECT SupplierName FROM Suppliers WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);

Join Query???? 

Self Join: A self join is a regular join, but the table is joined with itself.
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City 
ORDER BY A.City; - SQL statement matches customers that are from the same city

Inner Join: The INNER JOIN keyword selects records that have matching values in both tables.
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID); - SQL statement selects all orders with customer and shipper information.

Left Join: The LEFT JOIN keyword returns all records from the left table, and the matching records (if any) from the right table.
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID ORDER BY Customers.CustomerName; - SQL statement will select all customers, and any orders they might have.

Right Join: The RIGHT JOIN keyword returns all records from the right table, and the matching records (if any) from the left table.
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID ORDER BY Orders.OrderID; - SQL statement will return all employees, and any orders they might have placed.

Cross Join: The CROSS JOIN keyword returns all records from both tables.
SELECT Customers.CustomerName, Orders.OrderID FROM Customers CROSS JOIN Orders; - The CROSS JOIN keyword returns all matching records from both tables whether the other table matches or not.
If you add a WHERE clause (if table1 and table2 has a relationship), the CROSS JOIN will produce the same result as the INNER JOIN clause:

Order By????
top 3 salary
SELECT * FROM Customers order by salary desc limit 3;
//second max salary
SELECT * FROM Customers order by salary desc limit 1, 1;

group By????
The GROUP BY statement groups rows that have the same values into summary rows.
The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.

SELECT sum(amount) as totalSum, item FROM Orders group by item;

Union query???? 
The UNION operator is used to combine the result-set of two or more SELECT statements.
Every SELECT statement within UNION must have the same number of columns
The columns must also have similar data types
The columns in every SELECT statement must also be in the same order
The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL:
SELECT City FROM Customers UNION SELECT City FROM Suppliers
ORDER BY City; - SQL statement returns the cities (only distinct values) from both the "Customers" and the "Suppliers" table.

Insert Into Select:
The INSERT INTO SELECT statement copies data from one table and inserts it into another table.
The INSERT INTO SELECT statement requires that the data types in source and target tables matches.
INSERT INTO Customers (CustomerName, City, Country) SELECT SupplierName, City, Country FROM Suppliers; - SQL statement copies "Suppliers" into "Customers"

Case:
SELECT OrderID, Quantity,
CASE WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;

Null Functions: The MySQL IFNULL() function lets you return an alternative value if an expression is NULL. or we can use the COALESCE() function.
SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
FROM Products; - returns 0 if the value is NULL

Indexing?????? 
Indexes are used to retrieve data from the database more quickly than otherwise. Updating a table with indexes takes more time than updating a table without indexes.
CREATE INDEX idx_lastname ON Persons (LastName);
ALTER TABLE table_name DROP INDEX index_name;

Primary key, foreign key, unique key, uuid??? 

Sharding??? 
Transfering the data on diff machines vertically or horizantally

Stored Procedures:
A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

Replication???? 
Replication in computing involves sharing information so as to ensure consistency between redundant resources,

CAP Theorem???? 
Partition - A partition is a communications break within a distributed system—a lost or temporarily delayed connection between two nodes. Partition tolerance means that the cluster must continue to work despite any number of communication breakdowns between nodes in the system.

Consistency - Consistency in CAP means having the most up-to-date information. (ACID refers to a different database event. In ACID, consistency means any new transaction to the database won't corrupt the database.) 

Availability - Availability means that any client making a request for data gets a response, even if one or more nodes are down.

Normalization???? 
Replication in computing involves sharing information so as to ensure consistency between redundant resources. 
the data must be changed in exactly the same way in all locations
Inconsistent dependencies can make data difficult to access because the path to find the data may be missing or broken.
Example - Salary column in employee table

First normal form:
Eliminate repeating groups in individual tables.
Create a separate table for each set of related data.
Identify each set of related data with a primary key.
Second normal form:
Create separate tables for sets of values that apply to multiple records.
Relate these tables with a foreign key.
Third normal form:
Eliminate fields that do not depend on the key.


Trigger????? 
A trigger is a special type of stored procedure that automatically runs when an event occurs in the database server. DML triggers run when a user tries to modify data through a data manipulation language (DML) event. DML events are INSERT, UPDATE, or DELETE statements on a table or view.

SQL vs NoSQL???????
SQL:
Relational database
Predefined schema
Vertically scalable - RAM, CPU, SSD
Structure - table based
Property - ACID

NoSQL:
Non-relational/distributed db
Dynamic schema
Horizantally scalable - add more server to db
Structure - key/value pairs, document based
Property - CAP(Consistency, Availability, Partition Tolerance) 

Transactions:
A transaction is a unit of work that is performed against a database. Transactions are units or sequences of work accomplished in a logical order, whether in a manual fashion by a user or automatically by some sort of a database program.
ACID - Atmocity, Consistency, Isolation, Durability
Transaction Control:
COMMIT − to save the changes.
ROLLBACK − to roll back the changes.
SAVEPOINT − creates points within the groups of transactions in which to ROLLBACK.
SET TRANSACTION − Places a name on a transaction.

Views????
A view contains rows and columns, just like a real table.
CREATE VIEW view_name AS SELECT column1, column2, FROM table_name
WHERE condition;

functions in mysql????
concat(), format(), lcase(), length(), ltrim(), trim(), count(), max(), min(), sum()

Sequelize??? 
ORM for database synchronisation



