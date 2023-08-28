/*Pembuatan custom error guna menyusun error yang lebih spesifik membantu bentuk error yang sudah ada sebelumnya
* misalnya pada throwingError.js tentang parsing json kita masih menggunakan SyntaxError, padahal kekurangan satu data pada
* object parsing tidak termasuk dalam syntax error.
*
* Disinilah kita akan membuat custom error yang menangani masalah tersebut
* */

//membuat class untuk validasi error yang diturunkan dari error utama (defaultnya)
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
} //class khusus validasi error


//contoh baris kode
const json = '{"age": 30}';

//penerapan error
try {
    const user = JSON.parse(json);

    if(!user.name) {
        throw new ValidationError("'name' is required");
    }
    if(!user.age) {
        throw new ValidationError("'age' is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch(error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON ERROR! \nError: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`INVALID DATA! \nError: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}