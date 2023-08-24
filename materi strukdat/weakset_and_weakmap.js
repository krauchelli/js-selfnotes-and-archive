/*
* Weakmap, varian dari map dimana varian ini mendukung proses garbage collection.
* Misal setelah suatu variabel diberi nilai NULL setelah adanya pemberian nilai, seharusnya nilai pada variabel tersebut
* tidak ada.

* (untuk catatan lengkap berada di pertemuan struktur data pada kelas pemula javascript bagian weakmap dan weakset)
*  */

const {inspect} = require('util');

const visitsCountMap = new WeakMap();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count+1);
}

let jonas = {name: "Jonas"};
countUser(jonas); //menambahkan user ke fungsi

jonas = null;

//inisiasi delay
setTimeout(function() {
    console.log(inspect(visitsCountMap), {showHidden: true});
}, 10000);



/*
* cara kerja weakset kurang lebih sama seperti weak nya map, adapun beberapa ketentuan yang dmiiliki weakset:
* WeakSet tidak bisa menyimpan nilai primitif.
* WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
* WeakSet tidak memiliki properti size.
 */