/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

 */


const magicianNames: string[] =["Harry Porter", "Mirror", "David", "Barry", "Dirk"]

function showMagicians(magicians: string[]): void 
{
    for (const magician of magicians) {
        console.log(magician)
    }
}

 function make_great(magicians: string[]): string[]{
    const greatMagicians: string[] = magicians.map(magician => `the great ${magician}`)
    return greatMagicians
 }

 const greatMagicians: string[] = make_great(magicianNames)

 console.log("originalMagicians:")
 showMagicians(magicianNames)

 console.log("\nGreat Magicians:")
 showMagicians(greatMagicians)

 export{};