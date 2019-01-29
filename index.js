const names= ["Doc", "Dopey", "Bashful", "Grumpy"];
const planeteerCalls1 = ["earth", "wind", "fire", "water", "heart"]

function dwarfRollCall(dwarves) {
  let arr1 = []
  let string = ""
  for ( let i= dwarves.length/2; i<dwarves.length; i++){
   // pushing the elements with 1. /2. and so on  + whitepace  + the index value
   console.log(arr1.push((i+1)+"." + " " + dwarves[i]))
  }
// the " " inside join() removed the commas from array and i added whitespace at the end
  console.log(string = arr1.join(" ") + " ");
  return string
}
dwarfRollCall(names)

function summonCaptainPlanet(planeteerCalls){
  let  upperCaseArray= []
for (let i= 0; i<planeteerCalls.length; i++){
 // pushing the elements
 // wanted the array to be uppercase and pushing each element into new array
 console.log(upperCaseArray.push(planeteerCalls[i].toUpperCase() + "!"))

}
console.log(upperCaseArray)
return upperCaseArray
}
// Will now return an array with the elements in caps lock and excalamation mark

function longPlaneteerCalls(words){
for(let i = 0 ; i < words.length; i++){
if(words[i].length > 4){
  // anything longer thhan four characters . using length on the element and comparing if .
return true
}
}
return false
}



function findTheCheese (foods) {
for(let i = 0 ; i < foods.length; i++){
  // || is our or condiitonal
if(foods[i] === "cheddar" ||  foods[i] === "gouda" ||  foods[i] === "camembert"){
  // this ensures we return our first case of cheese .
return foods[i]
}
}
return "no cheese!"
}

let a1 = [ "re","be","br"]
function wordWithB(arr){
  let array = [];
  for(let i = 0; i< arr.length; i++){
    // conditional for when we find b
    if (arr[i].startsWith("b")) {
      array.push(arr[i])
    }
  }
  return array;
}
wordWithB(a1);
