/**
 *Destructuring object
 */

/*catatan kecil
* cara baca destructuring itu arah nya beda dari deklarasi variabel
* kalo deklarasi itu dari kiri ke kanan
* destructuring itu kanan ke kiri, tapi untuk bentuk deklarasinya tetep kiri ke kanan
* kalo lupa, pahami lagi bacaan ini sambil liat contoh-contoh catatan di bawah
* */



const profile = {
    username: "@krauchelli",
    rpgClass: "Firsthand Paladin",
    status: true
};


/**poin utama dalam destructuring, variabel lokal yang dideklarasi harus sesuai dan sama seperti pada object*/
const {username} = profile;

console.log(username);


//destructuring assignment, dimana variabel sudah dibuat sebelum adanya proses destructuring
let rpgClass = false;
//harus menggunakan tanda kurung dalam destructuring assignment
({rpgClass} = profile);
console.log(rpgClass);


//bisa juga langsung deklarasi dan memberikan value nya disaat ingin destructuring dengan cara memberikan expression (=) di dalam kurung
const {status, age = 20} = profile;
console.log(status);
console.log(age);


console.log("\n");
//destructuring ke variabel lokal yang berbeeda
profile2 = {
    bossName: "Aikuru",
    bossType: "Endgame Boss",
    bossLevel: "140",
    elementalType: null
};

const {bossName: localBossName } = profile2;
console.log(localBossName);

let localBossType = "Standard Boss";
({bossType: localBossType} = profile2);
console.log(localBossType);

/**
 *Destructuring array
 */
console.log("\n\n======================== Materi Destructuring array ==========================");

const jenisOlahan = ["stir fry", "boiled", "grill", "Raw"];

const [olahanPertama, olahanKedua, olahanKetiga] = jenisOlahan;
console.log(olahanPertama);

//pemanggilan di bagian terakhir saja juga bisa
let olahanKeempat = null;
[, , , olahanKeempat] = jenisOlahan; //destructuring assignment
console.log(olahanKeempat);

//destructuring pada array juga bisa digunakan untuk swap
let a = 6;
let b = 21;

[a,b] = [b,a];
console.log("Nilai a: " + a);

//berlaku juga poin default values, pembahasan mengenai memberikan value yang undefined pada array/object menjadi ada
// const [, , , , olahanKelima] = jenisOlahan;
// console.log(`Sebelum diberikan default value: ${olahanKelima}`); //hasilnya undefined
const [, , , , olahanKelima = "Tidak Tahu"] = jenisOlahan;
console.log(olahanKelima);
