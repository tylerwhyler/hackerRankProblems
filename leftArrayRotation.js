function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        let tempNum = a.shift();
        a.push(tempNum);
    }
    return a.join(' ') + '\n'
}

console.log(rotLeft([1,2,3,4,5], 4)); //output should be 1 2 3 4 5