function miniMaxSum(arr) {
    arr.sort()
    let newArr = [...arr]
    newArr.shift()
    function summer(total, iterNum) {
        return total + iterNum;
    }
    arr.pop()
    let minVal = arr.reduce(summer);
    let maxVal = newArr.reduce(summer);
    console.log(minVal, maxVal);
}

miniMaxSum([1,2,3,4,5]);