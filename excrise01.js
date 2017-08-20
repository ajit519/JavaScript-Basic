/**
  * Javascript this execrise.
  */
  
  var person = {
    "firstName": "Ajit",
	"lastName": "Kumar",
	"fullName": function(){
	  return this.firstName + " " + this.lastName;
	},
	"address": {
	  "street" : "8th Main",
	  "city": "Ranchi",
	  "pin": 560037
	},
	"isBangalore": function(city){
	  return this.address.city === city;
	}
  };
  
  console.log(person.isBangalore("Ranchi"));