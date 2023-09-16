"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const make_shirt = (Size = "Large", Message = "I love Typecript") => {
    console.log(`Size: ${Size}, Message: '${Message}'`);
};
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Pakistan");
