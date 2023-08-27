
//bentuk baris kode yang benar
console.log("== Hasil baris kode yang benar ==");
const json = '{ "name": "Yoda", "age": 20 }';

try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//bentuk yang salah
console.log("\n");
console.log("== Hasil baris kode yang salah ==");
const json1 = "{ bad json }";

try {
    const user1 = JSON.parse(json1);

    console.log(user1.name);
    console.log(user1.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
/*pada baris di atas muncul error dengan nama SyntaxError beserta message yang diberikan yang berarti json tidak sesuai format,
alhasil error tersebut ditangkap oleh block catch

nah bagaimana jika terdapat penulisan format yang benar but in reality there is something wrong? */
//berikut contohnya
console.log("\n");
console.log("== Hasil dari baris kode dengan Bentuk format yang benar tetapi logika yang salah ==");
const json2 = '{"age": 20}';

try {
    const user2 = JSON.parse(json2);

    console.log(user2.name); //tidak ada di string object, hasilnya undefined
    console.log(user2.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/*Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan.
Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror.*/
console.log("\n");
console.log("== Hasil dari baris kode dengan Bentuk format yang benar tetapi logika yang salah ==");
const json3 = '{"age": 20}';

try {
    const user3 = JSON.parse(json3);

    //menggunakan pengkondisian untuk melepaskan throw sehingga jika tidak memenuhi maka akan error
    if (!user3.name) {
        throw new SyntaxError("'name' is required!"); //throw ini akan otomatis melempar ke catch jika error benar-benar ada
    }

    console.log(user3.name); //tidak ada di string object, hasilnya undefined
    console.log(user3.age);
} catch (error) {
    console.log(error.name);
    console.log(`JSON ERROR ${error.message}`);
}

/*Yang terakhir adalah kondisi dimana terdapat dua error dengan jenis yang berbeda, gunakan if statement!*/
console.log("\n");
console.log("== Hasil dari baris kode dengan Bentuk format yang benar tetapi logika yang salah ==");
const json4 = '{"age": 20}';

try {
    const user4 = JSON.parse(json4);

    //menggunakan pengkondisian untuk melepaskan throw sehingga jika tidak memenuhi maka akan error
    if (!user4.name) {
        throw new SyntaxError("'name' is required!"); //throw ini akan otomatis melempar ke catch jika error benar-benar ada
    }

    errorLineCode;

    console.log(user4.name); //tidak ada di string object, hasilnya undefined
    console.log(user4.age);
} catch (error) {
    //if conditional use to catch error types
    if (error instanceof SyntaxError) {
        console.log(`JSON ERROR ${error.message}`);
    } else if(error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}