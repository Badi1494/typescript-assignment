"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let favoriteTransportation = [];
favoriteTransportation.push(["motorcycle", "Honda"]);
favoriteTransportation.push(["car", "Toyota"]);
favoriteTransportation.push(["bicycle", "sohrab"]);
//I would like to own a Honda motorcycle.
// using for each loop to print a series of statments.
favoriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}`); });
