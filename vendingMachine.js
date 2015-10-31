// var myModule = {
//   description: "My hella awesome module."
// };

// // Only works in nodejs terminal
// 	module.exports = myModule;

/* Vending Machine
1. Displays items and prices
2. Accepts money and gives change
3. Dispenses products
4. Load new products
*/

module.exports = {
	create: function () {
		var display = [
			{name: "chips", price: 1.50, quantity: 0},
			{name: "brownie", price: 2.50, quantity: 5},
			{name: "apple", price: 0.25, quantity: 5},
			{name: "soda", price: 2.50, quantity: 5},
			{name: "water", price: 7.50, quantity: 5},
			{name: "cake", price: 3.50, quantity: 5}
		];

		var vendingMachine = {
			"display": display,

			"restock": function(itemIndex) {
				var selectedItem = display[itemIndex];
				if (!selectedItem) {
					return "Selection is invalid. Stop doing it wrong.";
				}
				selectedItem.quantity = 5;
				return selectedItem.name + " was restocked! Have it, friend!";
			},

			"purchase": function(paymentAmt, itemIndex) {
				var selectedItem = display[itemIndex];
				if (!selectedItem) {
					return "Selection is invalid. Stop doing it wrong.";
				}
				if (selectedItem.price > paymentAmt) {
					return "Payment is insufficient, broke ass.";
				}
				if (selectedItem.quantity <= 0) { // Don't set '=== 0' because check will fail if user enters a negative integer.
					return "No " + selectedItem.name + " for you!";
				}
				// Dispense the product; track quantity; give change.
				var changeOwed = paymentAmt - selectedItem.price;
				selectedItem.quantity--;
				return "Dispensed " + selectedItem.name + ". Collect your change: $" + changeOwed + ".";
			}

		};
		return vendingMachine;
	}
};









