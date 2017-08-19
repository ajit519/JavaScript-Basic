/**
  * Javascript arrays
  * Eevry array is an object in javascript.
  * where it contains some some additional
  * property, some of them is like length.
  * note whenever we try to get length element
  * it will return the last index value with
  * one addition.  
  */

  var languages = ["c" , "c++", "java"];  
  
  console.log(languages[0]);
  // if we are accessing index which is not there in array it will return undefined.
  console.log(languages[3]);
  
  // for adding new element in array.
  
  languages[3] = "JS";
  console.log(languages[3]);
  
  console.log(languages.length);
  
  languages[99] = "Scala";
  
  // This will print 100 = 99+1 since the last index 99. it 
  // doesn't see the number of element in the array, but instead
  // of that it returns lastindex + 1 as length.  
  console.log(languages.length);
  
  languages["foo"] = "foo";
  
  // This will remain 100 since we have not given any number value as index.
  // so it always adivsable to have number based index.
  console.log(languages.length);