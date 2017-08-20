/**
  * Javascript function part 2
  * it help us to pass function as 
  * parameter to another function.
  */

 var greet = function(){
    console.log("Hello");
 };  
 
 var executor = function(greet){
   // to print Hello from greet method
   greet();
 }
 
 // passing function as arguments
 executor(greet);
 
 var hello = function(name){
	 console.log("Greetings from " + name);
 };
 
 var sayHello = function(fn, name){
	 fn(name);
 };
 
 sayHello(hello, "JS");