function checkAnagrams(word, list){
    for (let i of list) {
        if (word.toLowerCase().split('').sort().join('') === i.toLowerCase().split('').sort().join(''))
            return true
    }
    return false
}
function removeRepeat(array){
    let temp = [];
    for (let i of array){
        if(!(checkAnagrams(i,temp))) temp.push(i);
    }
    return temp;
}

console.log(removeRepeat(['nap','pan','Teacher','cheater','yyyy','xxq','yyyy']))