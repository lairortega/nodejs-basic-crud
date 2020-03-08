const customerLogic = {
    newCustomer: function(customerName){
        console.info("Customer name:", customerName);
        if(customerName == null || customerName == ''){
            return "El nombre requerido."
        }else if(!/^[a-z áéíóú]+$/ig.test(customerName)){
            return "El nombre no es válido."
        }
        return false;
    }
};

module.exports = customerLogic;