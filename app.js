var express = require('express');
var app = express();
var sql = require("mssql/msnodesqlv8")

  // config for your database
  var config = {
    "user": "sa",
    "password": "Sahil12345",
    "server":"SHARMA",
    "database": "CLBILL_DEV",
     
    "dialect": "mssql",
    "port": 1433,
     "options":{
         instanceName:'SQLNODE'
     }
    }

app.get('/', function (req, res) {
   
    

  

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from CONT', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});



var server = app.listen(3000, function () {
    console.log('Server is running..');
});

