const customerLogic = require("../logic/customer.logic");
const customerDao = require("../dao/customer.dao");

var handler = function(router){
    router.get('/', function(req, res, next){
        customerDao.list(function(error, result){
            if(error){
                res.status(500);
                res.json({
                    error: "Retrieving the customers."
                });
                console.log(error);
            }else{
                res.json(result);
            }
        });
    });

    router.post('/', function(req, res, next){
        console.info(req.body.name);
        var hasError = customerLogic.newCustomer(req.body.name);
        if(hasError){
            res.status(400);
            res.json({
                error: hasError
            });
        }else{
            console.log("Registrar usuario.");
            customerDao.add(req.body, function(error, result){
                if(error){
                    res.status(500);
                    res.json({
                        error: "Inserting new customer."
                    });
                    console.log(error);
                }else{
                    res.status(201);
                    res.json({
                        name:req.body.name,
                        id: result
                    });
                }
            });
        }
    });

    router.put('/', function(req, res, next){
        res.json({
            method: "PUT",
            path: "/customers",
            comment: "Update customer."
        });
    });

    router.patch('/', function(req, res, next){
        res.json({
            method: "PATCH",
            path: "/customers",
            comment: "Modify customer."
        });
    });

    router.delete('/', function(req, res, next){
        res.json({
            method: "DELETE",
            path: "/customers",
            comment: "Erase customer."
        });
    });

    return router;
}

module.exports = handler;