//penyimpanan yang bersifat key-value, mirip object. Bedanya map bisa digunakan pada tipe data apapun

const cobaMap = new Map([
    ["User001", 400],
    ["User002", 440],
    ["User003", 220]
]);

console.log(cobaMap);
console.log(cobaMap.size);
console.log(cobaMap.get("User001"));

//menambahkan sangat disarankan dan diharuskan menggunakan .set()
cobaMap.set("User004", 100);
console.log(cobaMap);