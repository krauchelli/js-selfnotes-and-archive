let arraySatu = ["Juri", 23.44, "Ice Scream", true];

for (let i = 0; i < 4; i++) {
    console.log(arraySatu[i]);
}
console.log(arraySatu[4]);


//memasukkan elemen/data ke dalam array
for (let i = 0; i < 10; i++) {
    let temp = 0;
    temp += i;
    arraySatu.push(temp);
}
console.log(arraySatu);

//menghapus elemen/data terakhir dari array
arraySatu.pop();
console.log(arraySatu);

/*
* penggunaan shift dan unshift
* shift untuk menghapus data pada posisi pertama
* unshift untuk menambah data pada posisi pertama
* */
arraySatu.shift();
console.log(arraySatu);
arraySatu.unshift("Jawir");
console.log(arraySatu);

/*
* penggunaan delete dan splice
* cara kerja delete sama seperti delete pada object
* */
delete arraySatu[0];
console.log(arraySatu);
/*
konsep penghapusan menggunakan delete pada array ini akan menyisakan
satu posisi index dan tidak menghilangkan nya
*/

//penggunaan splice untuk menghapus total index dan data nya
arraySatu.splice(2,1); //menghapus dari posisi index 2 dan menghapus sebanyak satu elemen/data saja
console.log(arraySatu);
//penggunaan splice untuk menambah elemen/data
arraySatu.splice(0,0, "Jangkrik");
console.log(arraySatu);

