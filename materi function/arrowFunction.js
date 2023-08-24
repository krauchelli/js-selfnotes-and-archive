//arrow function hanya berjenis expression saja dibanding function biasa yang terdiri dari declaration dan expression

//bentuk function biasa
//declaration
function funcSatu() {
    console.log("Hello!")
}
//expression
const callName = function fungsiNama(name) {
    return "hello!" + ' ' + name;
}
funcSatu();
console.log(callName("nanda"));


console.log("\n\n");
//bentuk arrow function
const hitungan = (nilai, pangkat) => {
    return nilai ** pangkat;
}
let hasil = hitungan(12,2);
console.log(hasil);

//versi alternatif dari baris di atas
const hitunganDua = (nilai, pangkat) => nilai ** pangkat; //langsung tanpa melakukan return, jika hanya ingin one liner
hasil = hitunganDua(12,2);
console.log(hasil);

//jika hanya ada satu parameter saja, bisa dihilangkan tanda kurungnya