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

function listPrime(firstNumber, secondNumber) {
    const result = [];
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

// TEST CASES
console.log(listPrime(1, 5));
console.log(listPrime(5, 10));
console.log(listPrime(10, 20));