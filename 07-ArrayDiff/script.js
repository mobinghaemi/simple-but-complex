const arrayDiff = (a, b) => {
    let result = []
    a.map(index1 => {
        b.map(index2 => index1 === index2 && result.push(index1))
    })
    return result
}

console.log(arrayDiff([1, 2, 3], [12, 22,3]));