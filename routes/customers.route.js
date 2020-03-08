var handler = function(router){
    router.get('/', function(req, res, next){
        // GET retorna el listado
        res.json({
            method: "GET",
            path: "/customers",
            comment: "Method reseved to list all customers."
        });
    });

    router.post('/', function(req, res, next){
        res.json({
            method: "POST",
            path: "/customers",
            comment: "Method design to create customer."
        });
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