/**
  * Revisiting equal operator with objects
  * null and undefined
  */

 var obj = { "message" : "Greetings"}

 var greet ;
 
 greet = obj;

 if(greet === obj){
    console.log("Both variable pointing to same object");
 } 
 
  /**
    * Applying null and undefined on object.
	*/
	
  var employee = {
	   "name" : "Ajit",
	   "age" : 30,
	   
  }	
  
  console.log("Since there is no member called sex it will give " + employee.sex);
  
  /**
    * it always a good practice if the variable value is not there then
	* initailize it with null.
    */
	
	var emp = {
		"firstName" : "Ajit",
		"lastName" : "Kumar",
		"middleName" : null
	}
	
	console.log(emp.middleName);