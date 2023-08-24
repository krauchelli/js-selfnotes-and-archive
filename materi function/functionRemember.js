//function awalan
//
// function setSatu(objekMasukan) {
//     const {username: localUsername, password: localPassword } = objekMasukan;
//     console.log(localUsername);
//     console.log(localPassword);
// }
//
// const objectSatuan = {
//     username: "Krauchelli",
//     password: null
// };
//
// console.log(objectSatuan.username);
// setSatu(objectSatuan);
//


//rest parameter
//menggunakan three consecutive dots (...) untuk menggabungkan beberapa nilai parameter menjadi satu array

function hitungan(...numbers) {
    let hasil = 1;
    for (let angka of numbers) { //for looping dalam bentuk versi js
        hasil *= angka;
    }
    return hasil;
}

let nilai = 12 * hitungan(1,5,6,7,8,8,3);
console.log(`Hasil nya adalah ${nilai} `);
