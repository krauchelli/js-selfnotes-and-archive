//bentuk oop pada js dibantu dengan "constructor function"
//persyaratan dalam pemanggilan nama untuk OOP menggunakan huruf kapital

//untuk memulai bisa menggunakan sintaks 'function' atau 'class', supaya dapat membedakan mari kita gunakan class saja

//bentuk function
function Makanan2 (nama, jenis, kualitas) {
    this.nama = nama;
    this.jenis = jenis;
    this.kualitas = kualitas;
}

//bentuk class
class Makanan {
    constructor (nama, jenis, kualitas) {
        this.kualitas = kualitas;
        this.jenis = jenis;
        this.nama = nama;
        this.tingkatPedas = Math.random(); //bisa memberi properti langsung tanpa parameter
    }

    //baris baris di bawah ini dinamakan method 
    dibuat() {
        console.log(`${this.nama} sedang dibuat dengan kategori ${this.jenis}`);
    }
    disajikan() {
        console.log(`${this.nama} disajikan dengan kualitas yang ${this.kualitas}`);
    }
    makananPedasLevel() {
        console.log(`${this.nama} ini disajikan dengan tingkat kepedasann sebesar ${this.tingkatPedas}`);
    }
}

//membuat objek
const makananSatu = new Makanan("Nasi goreng", "Makanan Utama", "A+");
const makananDua = new Makanan("Fried Shrimp", "Makanan sampingan", "B");

console.log(makananSatu);
console.log(makananDua);

makananSatu.dibuat();
makananDua.dibuat();
makananSatu.makananPedasLevel();