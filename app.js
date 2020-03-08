var express = require("express");
var app = express();
var router = express.Router();

const customerRouter = require("./routes/customers.route");

router.use('/customers', customerRouter(router));

app.use(router);

app.listen(3000, function(){
    console.log(this.caller, arguments);
    console.info("server running in port 3000")
});