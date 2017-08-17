/**
  * javascript object are free from object.
  * they don't follow any syntax like java
  * and other programming language.
  * it means it's not class based programming
  * language.
  */

var employee = {}

console.log("employee object " + employee);

// add member to object.

  employee.firstName = "Ajit";
  employee.lastName = "Kumar";
  
  console.log("employee object "+ JSON.stringify(employee));
     


var student = {
	"name": "saket",
	"age" : 22
}

console.log("Student details " + JSON.stringify(student ));

// accessing member of object

console.log("Student name " + student.name);

// we can access member variable by two ways one 
// with dot notation another with [] notation.

console.log(student["age"]);

// [] notation must use when we use some variable which is not 
// correct syntaxcally. 
var computer = {
	"memory" : 20,
	"1" : "one"  // variable 1 is not right variable name since name of the variable must start with letter
	
} 

// this code will give error
//console.log(computer.1);

console.log(computer[1]);