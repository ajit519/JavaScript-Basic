/**
  * delete operator in javascript
  */
  
  var employee = {
   "firstName" : "Ajit",
	 "lastName" : "Kumar",
<<<<<<< HEAD
<<<<<<< HEAD
	 "middleName": "xyz"
=======
	 "middleName": "abc"
>>>>>>> added middle name as abc
=======
	 "middleName": "abc"
>>>>>>> 64a2735ba7c68117e87db65f45ebef238d17df70
  };
  
  delete employee.middleName;
  
  console.log(employee);