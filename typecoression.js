/**
 * Javascript type corresion help 
 * developer to one cast variable 
 * to higher variable.
 * example var a = 123 + "4"
 * we let the value of as 1234 as 
 * string.
 *
 */

 var a = 123 + "4";
 console.log(a);

 var a = 456 + null;

  console.log(a);

 /**
  * comparing value in javascript 
  * is achived into two ways, 
  * 1. using == operator
  * 2. using === operator
  */

   var b =10;
   var c = 10;

   if(b == c){
      console.log("Values are equal ");
    }	
   
   var d = "10";
   
 /**
  * Below example states that javascript
  * interperter convert integer to string
  * and check the value of these two 
  * variables, resulting that will become
  * equal.
  *
  */
   if(c == d){
       console.log("value are equal");
    }

 /**
  * == equal operator was developed with
  * mind of ease of development. but that
  * created the issue to fix this they come 
  * with the idea === operator which check
  * the type and value for the comparing varaiable
  */

  var i =10;
  var j = 10;

  if(i === j){
     console.log("value are equal");
   }	  
