/**
  * delete operator in javascript
  */
  
  var employee = {
     "firstName" : "Ajit",
	 "lastName" : "Kumar",
	 "middleName": null
  };
  
  delete employee.middleName;
  
  console.log(employee);