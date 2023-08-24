//kurang lebih cara kerja object ini mirip seperti struct pada C
const testObj = {
    name: "Krauchelli",
    level: 20,
    race: "Half-elf",
    'registered job': "Sorcerer" //khusus untuk key yang menggunakan spasi harus dicover dengan tanda petik
};

//pemanggilan bisa menggunakan dot atau kurung tajam
console.log(testObj.name); //menggunakan dot seperti pada struct
console.log(testObj['level']); //menggunakan kurung tajam, tetapi harus dipanggil pakai tanda petik


/*
* walaupun testObj bernilai const untuk struktur data ini, tetapi kita masih bisa mengubah value pada masing-masing key nya
* (penjelasan lanjutan mengapa bisa terdapat di catatan dicoding)
* */

testObj.level = 50;
testObj["registered job"] = "Paladin";

console.log(testObj.level);
console.log(testObj["registered job"]);
testObj["statusAwaken"] = false; //menambahkan entry baru di object


//adapun query delete untuk menghapus salah properti pada object
console.log(testObj);

delete testObj.race;

console.log(testObj);