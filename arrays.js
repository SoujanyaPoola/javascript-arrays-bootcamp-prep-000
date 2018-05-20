var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  
    const ar = [element, ...array]
    return ar;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
   var myArray = myArray.unshift[element];
    return myArray;
}

function addElementToEndOfArray(){
  
}

function destructivelyAddElementToEndOfArray(){
  
} 

function accessElementInArray(){
  var anArray = [1,2,3,4];
  return anArray[2];
  
}

function destructivelyRemoveElementFromBeginningOfArray(){
  var anArray = [1,2,3];
  anArray.shift();
  return anArray ;
}

function removeElementFromBeginningOfArray(){
  var anArray = [1,2,3,4];
  anArray = anArray.slice(-3);
  return anArray;
}

function destructivelyRemoveElementFromEndOfArray(){
  var anArray = [1,2,3];
  anArray.pop();
  return anArray; 
}