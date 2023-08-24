const coffeeStock = {
    arabica: 100,
    robusta: 100,
    liberica: 100
};

//module.exports = coffeeStock;


//menambahkan module lagi
const isCoffeeMachineReady = true;
// module.exports = isCoffeeMachineReady; //cara seperti ini tidak bisa
//gunakan object literal {}
module.exports = {coffeeStock, isCoffeeMachineReady};
console.log(module);
