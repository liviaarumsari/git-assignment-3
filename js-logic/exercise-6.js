function gcd(firstNumber, secondNumber) {
    let gcd = 1;
    for (let i = 0; i <= Math.min(firstNumber, secondNumber); i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

// TEST CASES
console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
console.log(gcd(17, 23));