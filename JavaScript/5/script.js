let map = new Map();
map.set('name', 'John');
map.set('name2', 'Reza');
let keys = map.keys();
console.log(keys) // choon map.keys() yek list baraye ma nmisaze ke bkhaeem az method push estfade knim
keys = [...keys] // pas dar inja tabdil miknim b list ta be ta van az method push estfade knim.
keys.push('name3')
console.log(keys)