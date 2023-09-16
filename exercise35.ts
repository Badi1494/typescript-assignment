/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
 */

const animals = ["Cat", "Dog", "Rabbit"];

console.log("list of animals:")
for (const animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:")
for (const animal of animals) {
    if (animal === "Cat") {
        console.log(`A ${animal} is a good companion at home.`)

    }
    else if (animal === "Dog"){
        console.log(`A ${animal} is a great pet.`)
    }
    else if (animal === "Rabbit"){
        console.log(`A ${animal} is a cute pet and is natural recycler.`)
    }      
    
}    

console.log("\n Common in these animals:")
console.log("Any of these animal could be a great pet!")
export{}