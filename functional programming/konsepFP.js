/**
*
* 4 konsep besar dalam pembahasan FP
* -> 1. Pure Function
* -> 2. Immutability
* -> 3. Recursive
* -> 4. High-Order Function
*
*/

//pure function
/* konsep pure ini mengharuskan fungsi untuk tidak bergantung terhadap nilai/variabel di luar fungsi dan parameternya
* lawan konsep ini disebut impure function, karena fungsi tersebut bergantung kepada variabel global atau di luar fungsi*/

//contoh impure function
let nilaiDefault = 12;
function soalHitungan(nilaiMasukan) {
    return nilaiDefault * nilaiMasukan;
}
console.log(soalHitungan(12));
//ubah menjadi pure function
function soalHitungan2(nilaiMasukan) {
    return 12 * nilaiMasukan;
}
/* pure function juga dilarang untuk mengubah nilai atau variabel yang berada di luar baik secara sengaja maupun tidak sengaja*/
//dengan kata lain, pure function tidak boleh menghasilkan efek samping terhadap baris kode lain ketika digunakan
//contoh fungsi yang mengubah nilai di luar
function createPersonWithAge(age, person) {
    person.age = age;
    return person; //variabel person itu objek
}

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);
console.log({
    person, newPerson
});
//alhasil isi dari objek yang sebelumnya hanya terdapat name berisi tambahan age karena fungsi yang beroperasi)
//perbaikan ke pure function yang sesuai
function createPersonWithAge2(age, person) {
    return {...person, age}; //metode destructuring obj
}

const person2 = {
    name: 'Boris'
};

const newPerson2 = createPersonWithAge2(18, person2);

console.log({
    person2, newPerson2
});


/**Immutability*/
//konsep ini menerapkan larangan untuk mengubah objek setelah objek tersebut diubah.
//terus gimana kalo mau ubah suatu objek? buat aja objek baru yang source nya dari objek yang udah dibuat!

const user = {
    firstname: "Harry",
    lastname: "Brotter"
};
function createUserWithNewLastName(newLastName, userObj) {
    return {...userObj, lastname: newLastName};
}

const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);



/**Rekursif*/
//manggil fungsinya sendiri di dalam fungsi dia

function countDown(start) {
    console.log(start);
    if(start > 0)
        countDown(start-1);
}

countDown(10);



/**High-Order Function*/
/*js memiliki kemampuan dimana fungsi bisa dihitung sebagai variabel (e.g. arrow function)
* hence kita bisa menyimpan function dalam variabel juga*/
const hello = () => {
    console.log('Hello gais!');
}

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return() => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();

//contoh penggunaan konsep high-order
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, arrayBaru = [], index = 0 ) => {
        const item = arr[index];
        if(!item) return arrayBaru;
        return loopThrough(arr, action, [...arrayBaru, action(arr[index])], index+1);
    }

    return loopThrough(arr, action);
}

const newNames = arrayMap(names, (name)=> `${name}!`);
console.log({
    names,
    newNames
});