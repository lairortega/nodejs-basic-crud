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
    }
};

module.exports = customerDao;