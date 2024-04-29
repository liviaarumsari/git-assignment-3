// Buatlah sebuah function yang menerima sebuah angka
// Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap
// Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap tersebut dalam formatstring “ganjil” atau “genap”
// Tambahkan pengecekan tipe data di function tersebut.

function isEvenOrOdd(number) {
    if (typeof number !== "number") {
        return "Invalid Data";
    } else {
        if (number % 2 === 0) {
            return "genap";
        } else {
            return "ganjil";
        }
    }
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(20));
console.log(isEvenOrOdd(21));
console.log(isEvenOrOdd("string"));