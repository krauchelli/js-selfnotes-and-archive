/**letakkan kode yang berpeluang error, kode yang beneran ada error akan ditangkap oleh catch, sementara jika tidak ada error maka blok catch diabaikan*/
//contoh try and catch dengan kondisi try tanpa error
console.log("tanpa error");

try {
    console.log("awal blok");
    console.log("akhir blok");
} catch(error) {
    console.log("Blok ini muncul karena ada yang error");
}

console.log("\n");
//contoh dengan error
console.log("dengan error");

try {
    console.log("awal blok");
    errorCode;
    console.log("akhir blok");
    kodeYangError;
} catch(error) {
    console.log("Blok ini muncul karena ada yang error");
}
//baris kode di atas, blok catch menangkap error dari baris 'errorCode' karena memang terjadi error begitu kita eksekusi
//atau coba aja type kode asal lain

//nah sekarang bagaimana cara kita mengetahui alasan dari error nya? mari kita gunakan object error!
console.log("\n");
console.log("Menggunakan object error");

try {
    console.log("Awal blok");
    errorTerjadi;
} catch(alasanError) {
    console.log("Nama Error: " + alasanError.name);
    console.log(`Message: ${alasanError.message}`);
    console.log(`Debug atau Stack: ${alasanError.stack}`);
}


//satu lagi adalah penggunaan try-catch-finally
//blok finally akan tetap dijalankan tanpa peduli apapun hasil yang terjadi pada blok try-catch
console.log("\n");
console.log("Menggunakan try-catch-finally");

try {
    console.log("blok awal untuk final");
    pelaksanaanErrorEak;
    console.log("blok akhir");
} catch (errorTry) {
    console.log("Error has occured! Please check your try block again!");
} finally {
    console.log("This block will be shown no matter what, so good luck");
}