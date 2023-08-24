//penggunaan operator (...)
//alternatif dari pemanggilan berdasarkan index doang

let arraySatu = ["Jakarta", "Nganjuk", "Bogor"];
let arrayDua = [290, 3.33, 727, 34, 3667];

//menggunakan spread operator
console.log("Menggunakan spread operator:");
console.log(...arrayDua);
console.log(...arraySatu);
//menggunakan pemanggilan biasa
console.log("Menggunakan pemanggilan biasa: ");
console.log(arraySatu[0], arraySatu[1], arraySatu[2]);


//dapat digunakan untuk memindahkan dua array ke satu array baru
const allArray = [...arrayDua, ...arraySatu];
console.log(allArray);


/*
* spread operator ini juga bisa digunakan dalam strukdat object
* */

const objectSatu = {
    name: "Krauchelli",
    level: 20,
    race: "Half-elf",
    'registered job': "Sorcerer"
};

const objectDua = {
    name2: "Tairitsu",
    level2: "???",
    race2: false
};

const allObj = {
    ...objectSatu,
    ...objectDua
};
console.log(objectSatu);
console.log(objectDua);
console.log("\n");
console.log(allObj);

console.log(allObj.name2);