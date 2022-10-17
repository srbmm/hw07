function arraySort (...args) {
    let all = [];
    for (let i of args) {
        all.push(...i)
    }
    return all.sort((a, b)=> a - b)
}
console.log(arraySort([2222444,77722],[74,44]))
