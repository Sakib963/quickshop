# QuickShop E-Commerce Application

This is a web application built with HTML, CSS, Tailwind, JavaScript, Express and MySQL.

## Prerequisite
Before running this application, make sure you have the following installed in your system.
* Node.js
* nodemon
* MySQL + Workbench

## Setup
1. Clone the Repository
```bash
git clone https://github.com/
```

2. Open in Visual Studio Code
```bash
cd quickshop-client
code .
```

```bash
cd quickshop-server
code .
```

3. Install the dependencies for Server
```bash
npm install
```

4. Setup the Database\
Open MySQL Workbench and create new schema named quickshopdb. Further process will be in step 6.

5. Setup the environment variables\
Create a .env file and paste these lines to that file and modify it according to your database username and password.
```env
HOST=localhost
USER=yourUserName
PASSWORD=yourPassword
DATABASE=quickshopdb
```

6. Configuring Database\
Open MySQL Workbench and open query. Paste the following lines and execute it. 
```mysql
use quickshopdb;


CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  image VARCHAR(255),
  price DECIMAL(10, 2),
  unitInStock INT,
  supplier VARCHAR(255),
  category VARCHAR(255),
  description TEXT
);

CREATE TABLE supplier (
  id INT AUTO_INCREMENT PRIMARY KEY,
  supplierName VARCHAR(255)
);

CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoryName VARCHAR(255)
);

INSERT INTO supplier (supplierName) VALUES ('Apple');
INSERT INTO supplier (supplierName) VALUES ('Samsung');
INSERT INTO supplier (supplierName) VALUES ('Sony');
INSERT INTO category (categoryName) VALUES ('Phone');
INSERT INTO category (categoryName) VALUES ('Speaker');
INSERT INTO category (categoryName) VALUES ('Headphone');

```

7. Run The Server\
Press ctrl+shift+c, it will open terminal and run the following command:
```bash
nodemon index.js
```
It should display message like this:
```
QuickShop API is running on port: 5000
DB Connected Successfully
```
8. Run The Client Side Application\
Open the client side code and open it with live server by pressing alt+L+alt+O. It would open the browser and display the application.

## Usage
* Use the application to perform CRUD operation on the database such as creating, reading, updating and deleting products.
* Interact with the client side interface to perform these operations.

## Folder Structure
* `quickshop-client`: Contains the client side code (HTML, CSS, Tailwind, JavaScript).
* `quickshop-server`: Contains the server side code (ExpressJs, MySQL2) with index.js being the entry point of the server.

## Sample Data
There are some product data in data folder in server side which can be used to create products. I have given this data for your reference so that you can create products more easily to test this application.

## Feedback
If you have any questions, suggestions or issues, please feel free to reach out to me.
* Contact With Me: `abdullahnazmussakib@gmail.com`