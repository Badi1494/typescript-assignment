"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "badi ur rehman hamid";
// step 1 show in lowercase
let lowercase = personName.toLowerCase();
console.log(lowercase);
// step 2 show in upper case
let uppercase = personName.toUpperCase();
console.log(uppercase);
// step 3 show in title case
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
