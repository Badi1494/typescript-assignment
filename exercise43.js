"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

 */
Object.defineProperty(exports, "__esModule", { value: true });
const magicianNames = ["Harry Porter", "Mirror", "David", "Barry", "Dirk"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the great ${magician}`);
    return greatMagicians;
}
const greatMagicians = make_great(magicianNames);
console.log("originalMagicians:");
showMagicians(magicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
