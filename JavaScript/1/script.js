const testObject = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Pete2": 300,
    "Pete3": 300,
    "Pete4": 300,
    'reza': 400
}

function topSalary(obj) {
    let temp = [];
    for (let [key, value] of Object.entries(obj)) {
        if (temp[0] === undefined) {
            temp[0] = key;
        }
        if (value > obj[temp[0]]) {
            temp = [key]
        } else if (value === obj[temp[0]]) {
            temp.push(key);
        }
    }
    return temp;
}

console.log(topSalary(testObject));