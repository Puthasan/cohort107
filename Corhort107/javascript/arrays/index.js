

//* Array Literal
const movies = ['Step Brothers', '21 Jumpstreet', 'Wolf of Wallstreet'];
// this will print out 'Wolf of Wallstreet'
// console.log(movies[2]);


//? OVERWRITE A VALUE
movies[1] = 'Batman';

console.log(movies.length);
console.log(movies);

//
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);

}

let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

const ourMovies = yourMovies.concat(myMovies, movies);

//? concat
const copyOfMovies = movies.concat();

//? push a new array
copyOfMovies.push('Toy Story');


copyOfMovies.push('Batman 2');
console.log(copyOfMovies);

// removing the last element in the array
const lastEle = copyOfMovies.pop();

console.log(copyOfMovies);

console.log(`The movie ${lastEle} was removed.`);

const moviesName = copyOfMovies.join(' - ')

console.log(moviesName);

movies.push('Trading Places, Antitrust');
movies.unshift('Star Wars');