function minimumSwaps(sortedArr) {
    let arr = [...sortedArr]; 
    sortedArr.sort((a, b) => a - b);
    let counter = 0;
    function synthCreate(synthArr) {
      let newSynthArr = [];
      let sortedSynthArr = [...synthArr];
      sortedSynthArr.sort((a, b) => a - b);
      for (let x = 0; x < synthArr.length; x++) {
        if (synthArr[x] != sortedSynthArr[x]) {
          newSynthArr.push(synthArr[x]);
        }
      }
      return newSynthArr;
    }

    while (arr.join('') != sortedArr.join('')) {
      for (let y = 0; y < arr.length; y++) {
        for (let z = 0; z < arr.length; z++) {
          let arrCopy = [...arr];
          let arrCopyCopy = [...arr];
          arrCopy.splice(y, 1, arr[z]);
          arrCopy.splice(z, 1, arrCopyCopy[y]);
          if (synthCreate(arrCopy).length < synthCreate(arr).length - 1) {
            arr.splice(y, 1, arr[z])
            arr.splice(z, 1, arrCopyCopy[y])
            counter++;
          }
        }
        for (let z = 0; z < arr.length; z++) {
          let arrCopy = [...arr];
          let arrCopyCopy = [...arr];
          arrCopy.splice(y, 1, arr[z]);
          arrCopy.splice(z, 1, arrCopyCopy[y]);
          if (synthCreate(arrCopy).length < synthCreate(arr).length) {
            console.log(arr, '|', y, z)
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

console.log(minimumSwaps([2, 1, 4, 3, 5]))