/**
  * Javascript this keyword.
  */
  
  var person = {
    "firstName" : "Ajit",
	"lastName" : "Kumar",
	"fullName": function(){
	  return person.firstName + " " + person.lastName;
	}
  };
  
  console.log(person.fullName());
  
  /**
    * Above code have problem what if the variable person 
	* point to some other object.
	*/
	
  person = {};
	
  //console.log(person.fullName());

 /**
   * Let's change the reference.
   */

   var personOne = {
    "firstName" : "Ajit",
	"lastName" : "Kumar",
	"fullName": function(){
	  return personOne.firstName + " " + personOne.lastName;
	}
  };
   
  var per = personOne;

  console.log(per.fullName());
    