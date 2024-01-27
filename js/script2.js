//? Book exercises https://eloquentjavascript.net/02_program_structure

// for (let i = "#"; i.length <= 7; i += "#"){
//     console.log(i);
// }


// for (let i = 1; i <= 100;  i++) {
//     if (i % 3 === 0){
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }


// for (let i = 1; i <= 100; i++) {
//     let string = "";
//     if (i % 3 === 0) {
//         string += "Fizz"
//     }
//     if (i % 5 === 0) {
//         string += "Buzz"
//     }
//     console.log(string || i)
// }


// let width = 10;
// let height = 6;
// let chessboard = "";

// for (let h = 0; h < height; h++){
//     for ( let w = 0; w < width; w++){

//         if ((h + w ) % 2 === 0){
//             chessboard += "x";
//         } else {
//             chessboard += "o";
//         }
//     }
//     chessboard += "\n";
// }

// console.log(chessboard);


//? Book exercises https://eloquentjavascript.net/03_functions

// function min(a,b) {
//     return (a < b) ? a : b;
// }
// console.log(min(0, 10));
// console.log(min(0, -10));


//? Use recursion

// function isEven(n) {
//     if (n === 0) {
//         return "true"
//     } else if (n === 1) {
//         return "false"
//     } else if (n < 0) {
//         return isEven(n + 2);
//     }
//     return isEven(n - 2);
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));


// function countChar(string, char) {
//     let counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char){
//             counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(countChar("kakkerlak", "k"));
