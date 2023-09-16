/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 */

const make_shirt = (size: string, text: string) => {
    console.log(`Size: ${size}, Text: '${text}'`)

}
let size: string = "Large"
let text: string = "BELLA CIAO"
make_shirt(size , text)
make_shirt("Small", "California" )
export{}