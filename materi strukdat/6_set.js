//data pada set tidak diindex dan berurutan, penyimpanan data nya bersifat unik
const awalSet = new Set([1,1,1,44,65,23,66]);
console.log(awalSet);

//menambah dan menghapus(menghapus ini hanya bentuk nilainya, bukan index(index gaada))
awalSet.add(34);
awalSet.delete(1);
console.log(awalSet);