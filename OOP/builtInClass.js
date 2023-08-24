//contoh-contoh built in class

//date
const tanggal = new Date();

const timeInJakarta = tanggal.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
});

const timeInTokyo = tanggal.toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
});

console.log(timeInJakarta);





//array
const arrayKu = new Array(1,2,3,4,5,6,7);
console.log(arrayKu);
//sebagai tambahan, adapun jenis unique array
class UniqueArray extends Array {
    constructor(...args) {
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
        super(...uniqueValue);
    }

    push(item) {
        if(!this.includes(item)) {
            super.push(item);
        }
    }
}

const arrayUnikDua = new UniqueArray(1, 2, 3, 4, 5, 6, 7, 7, 12, 12);
console.log(arrayUnikDua);
arrayUnikDua.push(1);
arrayUnikDua.push(13);
console.log(arrayUnikDua);