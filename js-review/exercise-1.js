// Buatlah variable dengan let dan const.
let number1 = 5;
const number2 = 10;

console.log("number1: ", number1);
console.log("number2: ", number2);

// Buatlah sebuah array berisi 5 buah-buahan (string).
const fruits = ["Apple", "Pear", "Orange", "Banana", "Mango"]
console.log("FRUITS: ", fruits);
// Tambahkan satu buah
fruits.push("Watermelon")
console.log("FRUITS: ", fruits);
// Edit/ubah satu buah
fruits.splice(2, 1, "Lemon")
console.log("FRUITS: ", fruits);
// Kurangi satu buah terakhir dari array.
fruits.pop()
console.log("FRUITS: ", fruits);