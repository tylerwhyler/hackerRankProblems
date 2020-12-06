function minimumSwaps(sortedArr) {
    let arr = [...sortedArr]; 
    sortedArr.sort((a, b) => a - b);
    let counter = 0;
    let iterCount = 0;
    function synthCreate(synthArr, originalArr, sortedOriginalArr, biFlip) {
      let incorrectNums = 0;
      let incorrectOriginalArrNums = 0;
      let sortedSynthArr = [...synthArr];
      sortedSynthArr.sort((a, b) => a - b);
      for (let x = 0; x < synthArr.length; x++) {
        if (synthArr[x] != sortedSynthArr[x]) {
          incorrectNums++;
        }
        if (originalArr[x] != sortedOriginalArr[x]) {
          incorrectOriginalArrNums++;
        }
        if (incorrectNums < incorrectOriginalArrNums - 1) {
          return true;
        }
        if (incorrectNums < incorrectOriginalArrNums && biFlip) {
          return true;
        }
      }
    return false;
    }

    let wrongNumsCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sortedArr[i]) {
            wrongNumsCount++;
        }
        console.log(wrongNumsCount)
    }
    if (wrongNumsCount > 100) return ((wrongNumsCount/2) + 1);

    while (arr.join('') != sortedArr.join('')) {
      for (let y = 0; y < arr.length; y++) {
        if (arr.join('') === sortedArr.join('')) break;
        for (let z = 0; z < arr.length; z++) {
          if (arr.join('') === sortedArr.join('')) break;
          let arrCopy = [...arr];
          let arrCopyCopy = [...arr];
          arrCopy.splice(y, 1, arr[z]);
          arrCopy.splice(z, 1, arrCopyCopy[y]);
          if (arr[z] === sortedArr[z] || arr[y] === sortedArr[y]) {
             continue;
          }
          if (synthCreate(arrCopy, arr, sortedArr, false)) {
            arr.splice(y, 1, arr[z])
            arr.splice(z, 1, arrCopyCopy[y])
            counter++;
            break;
          }
        }
        for (let z = 0; z < arr.length; z++) {
          if (arr.join('') === sortedArr.join('')) break;
          let arrCopy = [...arr];
          let arrCopyCopy = [...arr];
          arrCopy.splice(y, 1, arr[z]);
          arrCopy.splice(z, 1, arrCopyCopy[y]);
          if (arr[z] === sortedArr[z] || arr[y] === sortedArr[y]) {
            continue;
          }
          if (synthCreate(arrCopy, arr, sortedArr, true)) {
            arr.splice(y, 1, arr[z])
            arr.splice(z, 1, arrCopyCopy[y])
            counter++;
          }
        }
      }
    }


    return counter;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7, 15, 14, 13, 12, 11, 10, 9, 8, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16]))