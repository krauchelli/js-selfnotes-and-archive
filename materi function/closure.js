// function mainFunct() {
//     let numba = 0;
//
//     function initPenjumlahan(num) {
//         sum = num;
//         for (let i = 0; i < 20; i++) {
//             sum++;
//         }
//     }
//     initPenjumlahan(numba);
//     return sum;
// }
//
// console.log(mainFunct());


//bentuk closure, yang di atas hanyalah contoh dari fungsi yang berada di dalam fungsi
//Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private.
const add = () => {
    let counter = 0;
        return () => {
            return counter++;
        };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());