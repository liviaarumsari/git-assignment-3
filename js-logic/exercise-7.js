function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));