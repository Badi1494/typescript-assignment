"use strict";
/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

 */
function makeSandwich(...items) {
    console.log("sandwich summary: ");
    if (items.length === 0) {
        console.log("you ordered an empty sandwich. please add some items.");
    }
    else {
        items.forEach((item, i) => {
            console.log(` ${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
makeSandwich();
makeSandwich("turkey", "lettuce", "tomato", "mayo");
makeSandwich("ham", "cheese");
makeSandwich("honey", "butter", "jam");
