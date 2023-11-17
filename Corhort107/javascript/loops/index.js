// // Output even number from 1 to 10.
// for (let i = 1; i <= 10; i++) {

//   console.log(`Now checking ${i}`);

//   if (i % 2 == 0) {
//       console.log(`${i} is even!`);
//   } else {
//       console.log(`${i} is odd!`);

//   }
// }

// // Output multiple of 3, starting at 6 and ending at 60.
// for (let i = 6 ; i >= 60 i++) {
//   if (i % 3 === 0) {
//     console.log(`${i} is a multiple of 3`);
//   } else {
//     console.log(`${i} is not a multiple of 3`);
//   }
// }


// Output an increasing number of # symbols, from 1 to 7, as shown below
// let symbol = '';

// for (let i = 1; 1 <= 7; i ++) {

//   symbol+= '#';

//   console.log(symbol);
// }



// let str = "Hello World";

// for (let io = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//? Count down to 0 from a given number.

// let x = 10; 

// while (x >= 0) {
//   console.log(x);


//   x--;
// }

//? Log integers in multiples of 3 as long as they are less than 35.

// let x = 0;

// while (x < 35) {
//   x++;

//   if (x % 3 !== 0) {
//     continue
//   }
//   console.log(`${x} is a multiple of three`);
// }

//? Print integers between 0 and 20 with the following conditions:

//* All numbers divisible by 2 should be multiplied by 3 before they are output.
//* All other integers should not be output.
// let x = 0

// while (x <= 20) {
//     if (x % 2 == 0 && x !== 0) {
//         let n = x * 3;
//         console.log(n);
//     }
//     x++;
// }

// OR..

// let x = 0

// while (true) {
//     if (x % 2 == 0 && x !== 0) {
//         let n = x * 3;
//         console.log(n);
//     }
//     if (x == 20) {
//         break;
//     }
//     x++
// }

//? Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

//* Write a loop that outputs how many quarters Romeo received.

// const cookiePrice = 4;
// const dollarBill = 10;
// const change = dollarBill - cookiePrice;
// console.log(change);

// let quarters = 0;

// while (quarters < (change % 0.25)) {
//   quarters++
// }

// console.log(quarters);

// OR....

// const cookiePrice = 4;
// const dollarBill = 10;
// const change = dollarBill - cookiePrice;
// console.log(change)

// while (true) {
//     console.log(change / 0.25);
//     break;
// }


