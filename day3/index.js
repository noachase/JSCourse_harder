function day3 (str) {
    console.log('initial str: ' + str);
    if (typeof str !== 'string') {
        console.log('введите строку')
    } else {
        let trimmed = str.trim();
        console.log('no spaces str: ' + trimmed);
        if (trimmed.length >= 30) {
            let newTrimmed = trimmed.substring(0,29) + '...'
            console.log('final str: ' + newTrimmed)
        }
    }
}
day3('  asdadadadadaddadasdasdasdasdaasdkghkjghkjhgkgkjgkjghjgkjkgjkgg           ')


