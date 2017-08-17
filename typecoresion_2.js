/**
 * Javascript with conditional expression.
 * every data type has boolean assoicated 
 * with it.
 *
 * syntax : if(!0){
 *            execute statement;
 *           }else{
 *            execute statement;
 *           } 
 *
 */

 var a = 10;
  
 if(a){
   console.log("value of a " + a);
 }

 var b = -10;
 if(b){
   console.log("value of b " + b);
 } 

 b = 0;
 if(b){
   console.log("value of b true");
  }else{
   console.log("value of b false");
 }	  

 
 b = "hello";

 if(b){
   console.log("b is true");
  }else{
   console.log("b is false");
  }	  

 b = "";

 if(b){
   console.log("value of b is true");
  }else{
   console.log("value of b is false");
  }

b = undefined;

 if(b){
   console.log("value of b is true");
  }else{
   console.log("value of b is false");
  }  

  b = null;

 if(b){
   console.log("value of b is true");
  }else{
   console.log("value of b is false");
  }