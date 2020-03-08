const dao = require("./mysql.params");

var customerDao = {
    add: function(data, callback){
        dao.query("INSERT INTO customers(name, enable) values(?, ?)", [data.name, 1], function(error, result){
            if(error){
                callback(error);
            }else{
                callback(null, result.insertId)
            }
        });
    },
    list: function(callback){
        dao.query("select id, name, enable, created, modified from customers", function(error, result){
            if(error){
                callback(error);
            }else{
                var customers = [];
                // console.log(result);
                for(var row in result){
                    customers.push(result[row]);
                    console.log(result[row].created)
                }
                callback(null, customers)
            }
        });
    }
};

module.exports = customerDao;