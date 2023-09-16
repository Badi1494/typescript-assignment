//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function createFruit(name: string, color: string,
    taste: string)
{
        return {
        name ,
        color,
        taste ,   
    };
}

//create an array of fruits.
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Sour"),
    createFruit("Pineapple", "Green", "Sour")
];

//Access an invalid index.
const invalidIndex = 10;

//there are only 5 elements in array, so this will throw an error
console.log(`fruit at index ${invalidIndex}:`, fruits[invalidIndex]);

//print the fruits.

fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name} , color: ${fruit.color}, taste: ${fruit.taste}`);
})


export{};



