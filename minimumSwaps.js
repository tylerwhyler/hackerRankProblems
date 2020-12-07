function minimumSwaps(sortedArr) {
    let counter = 0;
    let iterCount = 0;
    let arr = [...sortedArr];
    sortedArr.sort((a, b) => a - b);
    while (arr.join('') != sortedArr.join('')) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != sortedArr[i]) {
                let tempSwapNum = arr[i];
                if (sortedArr[i] === arr[sortedArr.indexOf(arr[i])] && 
                    arr[i] === sortedArr[arr.indexOf(sortedArr[i])]) {
                    counter++;
                    arr.splice(i, 1, sortedArr[i]);
                    arr.splice(sortedArr.indexOf(tempSwapNum), 1, tempSwapNum);
                    continue;
                }
                if (arr.join('') === sortedArr.join('')) break;
                counter++;
                arr.splice(arr.indexOf(sortedArr[i]), 1, arr[i]);
                arr.splice(i, 1, sortedArr[i]);
            }
        }
    }

    return counter;
}