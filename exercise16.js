"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guesList = [
    "Zia khan",
    "jahanzaib tayyab",
    "Abid sherwani"
];
//step1.  informing people that you found a bigger dinner table.
for (let guest of guesList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
//step2. Add one new guest to the beginning of your array.
let newGuestAtBeginning = "Imran khan";
guesList.unshift(newGuestAtBeginning);
//console.log(guesList)
//Step3. Add one new guest to the middle of your array.
let newGuestInMiddle = "Hamid Ijaz";
let middleIndex = Math.floor(guesList.length / 2);
guesList.splice(middleIndex, 0, newGuestInMiddle);
//console.log(guesList)
//step4. Use append() to add one new guest to the end of your list.
let newGuestAtEnd = "Mian Abdullah";
guesList.push(newGuestAtEnd);
//console.log(guesList)
//step5. Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation messeges:");
for (let guest of guesList) {
    console.log(`Dear ${guest}, you are invited to dinner please join us.`);
}
