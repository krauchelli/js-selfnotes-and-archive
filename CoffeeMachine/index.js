//const coffeeStock = require('./state');
//gunakan destructuring obj untuk variabel yang lebih dari satu
//pastikan penamaan nya sama sesuai properti
const {coffeeStock, isCoffeeMachineReady} = require('./state');

console.log(coffeeStock);

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("biji kopi habis!");
    }
}

makeCoffee("robusta", 80);
console.log(isCoffeeMachineReady);