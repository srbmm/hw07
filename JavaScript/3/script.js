function removeRepeat(array){
    let temp = [];
    for (let i of array){
        if(!(temp.includes(i))) temp.push(i);
    }
    return temp;
}

console.log(removeRepeat([2,4,8,2,5,8,9,2,'yyyy','xxq','yyyy']))