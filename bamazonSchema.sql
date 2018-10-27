-- CREATE DATABASE


DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);


-- SEEDS

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("television", "electronics", 400, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple watch", "electronics", 200, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", "electronics", 350, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("towels", "home supplies", 20, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keurig", "food and beverage", 100, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("portable grill", "outdoors", 50, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camping tent", "outdoors", 120, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kayak", "outdoors", 220, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("monopoly", "board games", 25, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("settlers of catan", "board games", 60, 5);


