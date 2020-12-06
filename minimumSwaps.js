function minimumSwaps(sortedArr) {
    //still isn't optimized enough to pass all hackerrank tests
    let arr = [...sortedArr]; 
    sortedArr.sort((a, b) => a - b);
    let newcount = 0;
    let counter = 0;
    function synthCreate(synthArr, originalArr, biFlip) {
      let incorrectNums = 0;
      let incorrectOriginalArrNums = 0;
      let sortedSynthArr = [...synthArr];
      sortedSynthArr.sort((a, b) => a - b);
      let sortedOriginalArr = [...originalArr];
      sortedOriginalArr.sort((a, b) => a - b);
      for (let x = 0; x < synthArr.length; x++) {
        newcount++
        console.log(newcount)
        if (synthArr[x] != sortedSynthArr[x]) {
          console.log(newcount, "%%%")
          incorrectNums++;
        }
        if (originalArr[x] != sortedOriginalArr[x]) {
          console.log(newcount, "%%%")
          incorrectOriginalArrNums++;
        }
        if (incorrectNums < incorrectOriginalArrNums - 1) {
            console.log(newcount, "%%%$$$")
          return true;
        }
        if (incorrectNums < incorrectOriginalArrNums && biFlip) {
          return true;
        }
      }
    return false;
    }

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
          if (synthCreate(arrCopy, arr, false)) {
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
          if (synthCreate(arrCopy, arr, true)) {
            arr.splice(y, 1, arr[z])
            arr.splice(z, 1, arrCopyCopy[y])
            counter++;
          }
        }
        console.log(arr, sortedArr)
      }
    }


    return counter;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7, 15, 14, 13, 12, 11, 10, 9, 8]))
