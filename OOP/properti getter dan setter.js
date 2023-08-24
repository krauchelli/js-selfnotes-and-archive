class Makanan {
    constructor (nama, jenis, kualitas) {
        this.kualitas = kualitas;
        this.jenis = jenis;
        this.nama = nama;
        this.tingkatPedas = Math.random(); //bisa memberi properti langsung tanpa parameter
    }

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


//menggunakan properti getter dan setter sehingga nilai suatu variabel pada class tidak dapat diubah saat dipanggil
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('Yamazaki', 'Rizu');
console.log(user);
console.log(user.fullName); //mengakses get
user.fullName = "Muhammaad Dwi"; //mengakses set
console.log(user.fullName); //mengakses get setelah proses set selesai dari baris di atas


//contoh lain
class UserRoleplayClass {
    constructor(name, level, role, position) {
        this.name = name;
        this.level = level;
        this.role = role;
        this.position = position;
        //this._currentExperience = Math.floor(Math.random() * 1000); //peraturan umum menggunakan underscore untuk menyatakan bahwa nilai ini tidak boleh diubah oleh parameter
        //bisa juga kita gunakan metode method supaya baris kode tidak berantakan
        this._currentExperience = this._getRandExp();
    }

    get curExp() {
        return this._currentExperience;
    }
    set curExpWarn(curExp) {
        console.log("You're not allowed to change your own exp, that is cheating!");
    }

    _getRandExp() {
        return Math.floor(Math.random() * 1000);
    }
}

const chara1 = new UserRoleplayClass("Chakuri", "34", "Paladin");
console.log(chara1);
chara1.curExpWarn = 2321;
console.log(chara1.curExp);