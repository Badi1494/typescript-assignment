//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[]=['ali' , 'hamid' , 'nasik' , 'ahmed'];

// loop through each name in array

for(let name of names){
    // print a personalize message for each name
    console.log(`Asalamoalaikum ${name} , how are you doing today. `)
}

export{}