var express = require('express');
var app = express();



app.get('/', function (req, res) {
   
    var sql = require("mssql/msnodesqlv8")
    const config = {
        user: 'sa',
        password: 'Sahil12345',
        server: 'localhost\\SQLNODE', // You can use 'localhost\\instance' to connect to named instance
        database: 'CLBILL_DEV',
        pool: {
            max: 10,
            min: 5,
            idleTimeoutMillis: 30000
        }
     
    }
    
new sql.ConnectionPool(config).connect().then(pool => {
    console.log(pool.query('select CTNO from CONT'))
    return pool.query('select CTNO from CONT')
    
}).then(result => {
    console.dir(result)
    console.log('This query took ' + (Date.now() - date) + 'ms to return ' + result.recordset.length + ' rows!');
}).catch(err => {
    // ... error checks
})

// messageHandler()

});



var server = app.listen(3000, function () {
    console.log('Server is running..');
});

