const names= ["Doc", "Dopey", "Bashful", "Grumpy"];
const planeteerCalls1 = ["earth", "wind", "fire", "water", "heart"]

function dwarfRollCall(dwarves) {
  let arr1 = []
 let string = ""
for ( let i= 0; i<dwarves.length; i++){
 // pushing the elements
 console.log(arr1.push((i+1)+"." + " " + dwarves[i]))

}
console.log(string = arr1.join(" ") + " ");
return string
}


function summonCaptainPlanet(planeteerCalls){
  let  upperCaseArray= []
for (let i= 0; i<planeteerCalls.length; i++){
 // pushing the elements
 console.log(upperCaseArray.push(planeteerCalls[i].toUpperCase() + "!"))

}
console.log(upperCaseArray)
return upperCaseArray
}
// Will now return an array with the elements in caps lock and excalamation mark

function longPlaneteerCalls(words){
for(let i = 0 ; i < words.length; i++){
if(words[i].length > 4){
return true
}
}
return false
}



function findTheCheese (foods) {
for(let i = 0 ; i < foods.length; i++){
if(foods[i] === "cheddar" ||  foods[i] === "gouda" ||  foods[i] === "camembert"){
return foods[i]
}
}
return "no cheese!"
}
