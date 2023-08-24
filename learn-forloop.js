let listNama= ["ada", "john"];


//using standard for loop procedure
console.log("Using standard for loop procedure");
for (let i = 0; i < 2; i++) {
    console.log(listNama[i]);
}

//using js method
console.log("Using for of");
for (const arrayItem of listNama) {
    console.log(arrayItem);
}