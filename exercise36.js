"use strict";
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const make_shirt = (size, text) => {
    console.log(`Size: ${size}, Text: '${text}'`);
};
let size = "Large";
let text = "BELLA CIAO";
make_shirt(size, text);
make_shirt("Small", "California");
