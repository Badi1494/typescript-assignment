/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

//Step1.  Store the locations in a array. Make sure the array is not in alphabetical order.

let travelDestinations: string[] = ["Bali", "poland", "syprus", "cairo","dubai"]

//step2. Print your array in its original order.
console.log("Original order:")
console.log(travelDestinations)

//step3.• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort())

//step4. Show that your array is still in its original order by printing it.

console.log("\n showing array is still in original order:")
console.log(travelDestinations)

//step5• Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\n Reverse alphabetical order")
console.log([...travelDestinations].sort().reverse())

//step6• Show that your array is still in its original order by printing it again.

console.log("\n showing array is still in original order:")
console.log(travelDestinations)

//step7• Reverse the order of your list. Print the array to show that its order has changed.
console.log( "\nReverse the order of your list. Print the array to show that its order has changed")
travelDestinations.reverse()
console.log(travelDestinations)

//step8• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n back to original")
travelDestinations.reverse()
console.log(travelDestinations)

//step9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Changed to alphabetiical order")
travelDestinations.sort()
console.log(travelDestinations)

//step10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Changed to reverse alphabetiical order")
travelDestinations.sort().reverse()
console.log(travelDestinations)
export{}








