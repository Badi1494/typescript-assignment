/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */

const make_shirt = (Size: string= "Large", Message: string= "I love Typecript") => {
    console.log(`Size: ${Size}, Message: '${Message}'`);
  };
  
  make_shirt();
  make_shirt("medium");
  make_shirt("small", "I love Pakistan");
export{}  