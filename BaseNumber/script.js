function converter(number = 10, base = 2) {
    array = []

    if (number > 0) {
        return converter(parseInt(number / base))
            + (number % base) && array.push(number % base)
    };
    return '';
}


console.log(converter(10, 2));

console.log(array);