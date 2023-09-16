"use strict";
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
const bouquet = {
    name: "spring delight",
    price: 300,
    description: "beautiful spring flowers"
};
// define an array of objects
let bouquets = [];
//pushing multiple objects.
bouquets.push(bouquet);
bouquets.push({
    name: "summer delight",
    price: 400,
    description: "beautiful summer flowers"
});
let bouquet3 = {
    name: " red hot",
    price: 370,
    description: "beautiful arrangements of red roses"
};
bouquets.push(bouquet3);
//console.log(bouquets);
bouquets.push({ name: "freshness", price: 300, description: "beautiful arrangements of fresh white roses" });
//console.log(bouquets);
// function to display bouquets
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`title: ${i.name}
             description ${i.description}
             price: ${i.price}
             ___________________\n`);
    }
}
displayBouquets(bouquets);
