var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'multistep_checkout'
});

connection.connect();

module.exports = {
  addDataToDB: function(query, callback){
    console.log('QUERY ARRIVING IN DATABASE:  ', query)
    connection.query(`INSERT INTO customerInfo (name, email, password, line1, line2, city, state, zipCode, phoneNumber, creditCardNumber, expiryDate, CVV, billingZipCode) VALUES('${query.name}', '${query.email}', '${query.password}', '${query.line1}', '${query.line2}', '${query.city}', '${query.state}', ${query.zipCode}, ${query.phoneNumber}, ${query.creditCardNumber}, ${query.expiryDate}, ${query.CVV}, ${query.billingZipCode});`), function (error, results, fields) {
      if (error) {
        callback(error)
      } else {
        callback(null, results);

      }
    }
  }
  //can add more properties
}

// `INSERT INTO customerInfo (name, email, password, line1, line2, city, state, zipCode, phoneNumber, creditCardNumber, expiryDate, CVV, billingZipCode) VALUES('Philip Hamner', 'philiphamner@gmail.com', 'sneakypw', '6035 rockridge blvd.', 'n/a', 'Oakland', 'California', 94618, 5105990413, 1234567890, 2021, 123, 94618);`

// `INSERT INTO customerInfo VALUES('Philip Hamner', 'philiphamner@gmail.com', 'sneakypw', '6035 rockridge blvd.', 'n/a', 'Oakland', 'California', '94618', '5105990413', '1234567890', '2021', '123', '94618');`

// connection.end();

// export default addDataToDB;

