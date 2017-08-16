/**
 * Difference between undefined and null.
 * When we don't assign value to a variable
 * javascript will give default value. which
 * is undefined, where we sometimes know that 
 * value doesn't exist so we put the value of 
 * variable to null.
 * ex: name = firstName + middleName + lastName
 * name = Ajit Kumar
 * if we see the above example then we see value 
 * for middleName variable if user doesn't give
 * then it will be undefined, where as in the
 * name middlename doesn't available so it will
 * better to put null
 */

 var firstName = "Ajit";
 var lastName = "Kumar";
 var middleName ;
 
 console.log(firstName +" " + middleName +" "+ lastName);

 middleName = null;

 console.log(firstName +" "+ middleName +" "+ lastName); 
