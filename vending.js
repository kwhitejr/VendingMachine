var vendingMachineModule = require('./vendingMachine.js');
var vendingMachine = vendingMachineModule.create();

console.log(vendingMachine.purchase());
console.log(vendingMachine.purchase(0, 1));
console.log(vendingMachine.purchase(1.50, 0));
console.log(vendingMachine.purchase(10, 2));
