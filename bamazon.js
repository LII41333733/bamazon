var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var db = mysql.createConnection({
 host: "localhost",

 // Your port; if not 3306
 port: 3306,

 // Your username
 user: "root",

 // Your password
 password: "",
 database: "bamazon_DB"
});

// connect to the mysql server and sql database
db.connect(function (err) {
 if (err) throw err;
 // run the start function after the connection is made to prompt the user
 console.log("Connected!")
 displayItems();
});

function displayItems() {
 db.query(
  "SELECT * FROM products", (err, res) => {
   if (err) throw err;
   res.forEach(product => {
    console.log(`
ID: ${product.item_id}
Name: ${product.product_name}
Department: ${product.department_name}
Price: $${product.price}
Quantity: ${product.stock_quantity}`)
   });
   askProductID(res);
  }
 )
}

function askProductID(products) {
 inquirer
  .prompt([
   {
    name: "ID",
    type: "input",
    message: "Enter the ID for the item you would like to buy: ",
    validate: function (value) {
     if (isNaN(value) === false) {
      return true;
     }
     return false;
    }
   }
  ])
  .then(function (answer) {
   products.forEach(product => {
    for (var key in product) {
     if (product[key] === parseInt(answer.ID)) {
      db.query(
       "SELECT * FROM products WHERE ?",
       { item_id: answer.ID },
       (err, res) => {
        if (err) throw err;
        var itemPrice = res[0].price;
        if (res[0].stock_quantity < 1) {
         console.log(`
         -------------------------------------
         Insufficient quantity!
         -------------------------------------`)
         askProductID(products);
        } else {
         db.query(
          "UPDATE products SET ? WHERE ?",
          [
           {stock_quantity: res[0].stock_quantity -= 1},
           {item_id: answer.ID}
          ],
          (err, res) => {
           if (err) throw err;
           console.log(`
           -------------------------------------
           TOTAL COST: $${itemPrice}
           -------------------------------------`)
           displayItems();
          }
         )
        }
       }
      )
     }
    }
   })
  }
 )
}
