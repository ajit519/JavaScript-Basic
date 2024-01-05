/**
  * delete operator in javascript
  */
  
  var employee = {
     "firstName" : "Ajit",
	 "lastName" : "Kumar",
	 "middleName": "abc"
  };
  
  delete employee.middleName;
  
  console.log(employee);