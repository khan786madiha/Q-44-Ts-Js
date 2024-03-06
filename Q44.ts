// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items specified for the sandwich.");
    } else {
        console.log("Items on the sandwich:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("-----------------------");
}

// Call the function three times with different number of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Bacon", "Avocado");
orderSandwich("Peanut Butter", "Jelly");


  