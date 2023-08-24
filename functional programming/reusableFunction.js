/**
 * Setelah mempelajari konsep-konsep FP, selanjutnya fungsi yang akan kita buat akan bersifat reusable tanpa mengganggu persyaratan FP*/

/**Array Map*/
//fungsi array.map() ini merupakan fungsi bawaan dari array, dengan cara memanggil sebuah data bertipe array dan menerima satu buah callback function

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {return `${name}!`}); //dalam map ini isinya arrow function, so get used to it
console.log(newArray);

const arrayTambahan = newArray.map(function(name) {
    return name.toUpperCase();
});//menggunakan sintaks function biasa
console.log(arrayTambahan);



/**Array filter*/
//kurang lebih cara pakainya sama seperti .map(), penggunaan filter ini seperti namanya untuk menyaring data array sebelumnya tanpa mengganggu data array original

const truthArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthArray);


/**Array reduce */
//digunakan untuk eksekusi fungsi reducer pada tiap elemen array dan hanya mengembalikan output satu nilai saja
// sintaks penggunaan: arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
    // [...] adalah opsional parameter

const students = [
    {
        name: 'Harry',
        score: 60
    },
    {
        name: 'James',
        score: 88
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = students.reduce((acc,students) => acc + students.score, 0);
console.log(totalScore);


/**Array Some*/
//fungsi bawaan array yang menghasilkan nilai boolean
//misalnya ingin mencari apakakh suatu nilai terdapat di dalam array menggunakan suatu metode pencarian
//sintaks: arr.some(callback(element, [index], [array]), [thisArg])
// [...] adalah opsional parameter

const arrayOfNum = [1,2,3,4,5];
const even = arrayOfNum.some(element => element % 2 === 0);
console.log(even);


/**Array find*/
const students2 = [
    {
        name: 'Harry',
        score: 60
    },
    {
        name: 'James',
        score: 88
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const findJames = students2.find(student => student.name === 'James');
console.log(findJames);


/**Array sort*/
//melakukan fungsi sort, fungsi ini akan mengubah semua nilai dalam deretan menjadi bentuk STRING dan mengurutkannya secara ascending.
const namaKeren = ['Maliki', 'Ujacco', 'Arphen', 'Ballistic'];
const namaSorted = namaKeren.sort();
console.log(namaSorted);

const nomorKeren = [23, 4, 1, 5, 67];
nomorKeren.sort();
console.log(nomorKeren);

//bisa juga kita melakukan komparasi berdasarkan kriteria sendiri
const compareNumber = (a,b) => {
    return a-b;
};
const sortingNumber = nomorKeren.sort(compareNumber);
console.log(sortingNumber);


/**Array every*/
//fungsi bawaan yang digunakan untuk mengecek apakah nilai-nilai dalam array sesuai dengan kriteria yang diinginkan, return dari fungsi ini adalah boolean
const scores = [12, 32, 78, 90, 85];
const minimumScore = 65;

const examPassed = scores.every(skorP => skorP >= minimumScore); //false karena salah satu ada yang di bawah
console.log(examPassed);


/**Array forEach*/
//fungsi ini berfungsi sama seperti for looping, tetapi jika kita bandingkan dengan for looping berarti forEach termasuk dalam pemanggilan secara deklaratif
//sedangkan for looping masuk dalam kategori imperatif
//On a side note, kita tidak bisa menggunakan operator break dan continue pada proses ini, berlaku juga untuk semua fungsi di atas

const arrayNamaNama = ['Harry', 'Jeff', 'Thomas', 'Ron', 'Albert'];
arrayNamaNama.forEach((name) => {
    console.log(`Hello! ${name}!`);
})