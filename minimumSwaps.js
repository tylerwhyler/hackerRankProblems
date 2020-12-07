function minimumSwaps(sortedArr) {
    let counter = 0;
    let arr = [...sortedArr];
    sortedArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let sortedI = sortedArr[i];
        let arrI = arr[i];
        if (arrI != sortedI) {
            counter++;
            [arr[arr.indexOf(sortedI)], arr[i]] = [arrI, sortedI]
        }
    }
    return counter;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))