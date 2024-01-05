/**
  * delete operator in javascript
  */
  
  var employee = {
   "firstName" : "Ajit",
	 "lastName" : "Kumar",
	 "middleName": "abc-22"
  };
  
  delete employee.middleName;
  
  console.log(employee);