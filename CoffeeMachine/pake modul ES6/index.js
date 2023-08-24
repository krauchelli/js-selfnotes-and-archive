import {teaFlavour, checkValue} from "./state.js";
//bisa juga pake nama lain, anggap saja sebagai pendeklarasian

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(teaFlavour);

checkValue(teaFlavour.Matcha);