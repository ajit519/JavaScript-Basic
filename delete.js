/**
  * delete operator in javascript
  */
  
  var employee = {
   "firstName" : "Ajit",
	 "lastName" : "Kumar",
<<<<<<< HEAD
	 "middleName": "xyz"
=======
	 "middleName": "abc"
>>>>>>> added middle name as abc
  };
  
  delete employee.middleName;
  
  console.log(employee);