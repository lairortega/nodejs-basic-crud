const customerLogic = {
    newCustomer: function(customerName){
        console.info(customerName);
        if(customerName == null || customerName == ''){
            console.log("Nombre requerido...");
            return "El nombre requerido."
        }else if(/^[a-z áéíóú]+$/ig.test(customerName)){
            console.log("Nombre no válido...");
            return "El nombre no es válido."
        }
        return false;
    }
};

module.exports = customerLogic;