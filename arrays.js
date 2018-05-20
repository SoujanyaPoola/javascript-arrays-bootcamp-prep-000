var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  
    const ar = [element, ...array]
    return ar;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element){
  const ar = [...array, element]
  return ar;
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
} 

function accessElementInArray(array, index){
  return array[index];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift();
 return array;
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