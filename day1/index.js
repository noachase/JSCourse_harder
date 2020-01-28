let num = 266219,
    multipliedDigits = num.toString().split('').reduce((a, b) => a * b, 1),
    multipliedByThree = multipliedDigits**3,
    firstTwoDigits = multipliedByThree.toString().substr(0, 2);

console.log(`Результат: ${multipliedDigits}`);
console.log(`Результат **3: ${multipliedByThree}`);
console.log(`Первые 2 цифры: ${firstTwoDigits}`);