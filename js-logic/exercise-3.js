function urutHuruf(text) {
    textArr = text.split('')
    textArr.sort()
    return textArr.join('')
}

// TEST CASES 
console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"));