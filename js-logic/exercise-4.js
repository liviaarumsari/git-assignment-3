function isArithmeticProgression(numbers) {
    if (numbers.length < 2) {
        return false;
    }

    const diff = numbers[1] - numbers[0];
    return numbers.reduce((acc, curr, idx, arr) => {
        if (idx > 0) {
            return acc && (arr[idx] - arr[idx-1] === diff);
        }
        else {
            return true;
        }
    }, true)
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7]));