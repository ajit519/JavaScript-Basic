/**
  * Javascript function
  * Javascript doesn't support method method overloading.
  */
  
  function greet(){
    console.log("Hello ");
  }
  
  greet();
  
  function greetMe(name){
	  console.log("Hello " + name);
  }
  
  greetMe("Ajit");
  
  function greetMeTo(name , day){
	  console.log('Hello '  + name +' today is ' + day);
  }
  
  greetMeTo("Ajit", "Saturday");
  
  
  // below method execution will not print last argument
  greetMeTo("Ajit", "Saturday", "it's weekend");
  
  // function as expression
  
  var f = function foo(){
	  console.log("log");
  };
  
  f();
  
  var fn = function(){
	  console.log("I don't have name so i am annonyous function.");
  };
  
  fn();
  
 // limitation of javascript function.
 fn = 23;
 
 // below line will produce error since we change the fn pointing function to interger.
 //fn();