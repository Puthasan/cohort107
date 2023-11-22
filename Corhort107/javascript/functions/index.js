// //*
// let userName = 'Alex';
// console.log(userName);


// const myObject = {
//   print: function() {
//     console.log('Hello')
//   }
// }
// myObject.print(userName);


//* Function Declaration
function addTwoNumbers(a , b) {
  //code goes here
  return a + b;
}

function sayHi(name) {
  console.log(`Hello ${name}`);
}

//* Calling the function
// addTwoNumbers(2, 3);

sayHi('Tig')


const sayHello = function(name) {
  console.log(`Hello ${name}`);
}

sayHello('Ana')

//* Function Declaration
function add(a, b) {
  return a + b;
}

const result = add(5,10);
console.log(result);


//* Arrow Function
const multiply = (a, b) => a * b;
//? OR
// const multiply = (a, b) => {
//   return a * b
// }

const newResult = multiply(3, 3);

console.log(newResult);

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

const result3 = areBothEven(2, 4);
console.log(result3);

//* Practice Activity 1
const computerArea = (width, height) => {
 return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`; 
}  

console.log(computerArea(4, 10))

//* Practice Activity 2
const planetHasWater = function(planet) {
  const lowercasedPlanet = planet.toLowerCase();
  return lowercasedPlanet === "earth" || lowercasedPlanet === "mars"
}
console.log(planetHasWater("Earth"));
console.log(planetHasWater("MARS"));
console.log(planetHasWater("venus"));


//* Arguments Array-Like
// function getDevObject(name) {
//   const skills = [];

//   for (let i = 1; i < arguments.length; i++) {
//     skills.push(arguments[i]);
//   }
  
//   return {
//     devName: name,
//     jobSkills: skills
//   }
// }


function getDevObject(name, ...skills) {
    return {
        devName: name, 
        jobSkills: skills
    }
}

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JS', 'React');
console.log(devObj);