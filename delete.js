/**
  * delete operator in javascript
  */
  
  var employee = {
   "firstName" : "Ajit",
	 "lastName" : "Kumar",
	 "middleName": "xyz"
  };
  
  delete employee.middleName;
  
  console.log(employee);