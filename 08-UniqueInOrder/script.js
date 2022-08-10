const unique = iterable => {
    for (let i = 0; i < iterable.length; i++)
        iterable[i] === iterable[i + 1] && iterable.splice(i, 1)
    return iterable
}

console.log(unique([1, 1, 3, 4, 4, 5, 5]));