//penggunaan private ini untuk membatasi penggunaan properti dan metode sehingga tidak dapat digunakan di luar class
class UserRoleplayClass {
    #_currentExperience = null; //enclosing class
    constructor(name, level, role, position) {
        this.name = name;
        this.level = level;
        this.role = role;
        this.position = position;
        //this._currentExperience = Math.floor(Math.random() * 1000); //peraturan umum menggunakan underscore untuk menyatakan bahwa nilai ini tidak boleh diubah oleh parameter
        //bisa juga kita gunakan metode method supaya baris kode tidak berantakan
        this.#_currentExperience = this.#_getRandExp();
    }

    get curExp() {
        return this.#_currentExperience;
    }
    set curExpWarn(curExp) {
        console.log("You're not allowed to change your own exp, that is cheating!");
    }

    #_getRandExp() {
        return Math.floor(Math.random() * 1000);
    } //enclosing
}

const chara1 = new UserRoleplayClass("Chakuri", "34", "Paladin");
console.log(chara1);
chara1.curExpWarn = 2321;
console.log(chara1.curExp);

/*
* untuk deklarasi private pada properties, gunakan # di bawah baris class sebelum mendeklarasikan constructor
* untuk deklarasi private pada method, gunakan # saat mendeklarasikan method
* jangan lupa sesuaikan nama properties/method saat melakukan pemanggilan, type juga # nya
* */