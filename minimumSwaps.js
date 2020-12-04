function minimumSwaps(sortedArr) {
    let arr = [...sortedArr]; 
    sortedArr.sort((a, b) => a - b);
    let counter = 0;
    function synthCreate(synthArr) {
      let newSynthArr = [];
      sortedSynthArr = [...synthArr];
      sortedSynthArr.sort((a, b) => a - b);
      for (let x = 0; x < synthArr.length; x++) {
        if (synthArr[x] != sortedSynthArr[x]) {
          newSynthArr.push(synthArr[x]);
        }
      }
      return newSynthArr;
    }

    for (let y = 0; y < arr.length; y++) {
      for (let z = 0; z < arr.length; z++) {
        let arrCopy = [...arr];
        let arrCopyCopy = [...arr];
        arrCopy.splice(y, 1, arr[z]);
        if (synthCreate(arrCopy).length < synthCreate(arr).length - 1) {
          //console.log(arr, '|', y, z)
          console.log(arrCopyCopy[y], '|ss', y, z)
          arr.splice(y, 1, arr[z])
          arr.splice(z, 1, arrCopyCopy[y])
          counter++;
        }
      }
      for (let z = 0; z < arr.length; z++) {
        let arrCopy = [...arr];
        let arrCopyCopy = [...arr];
        arrCopy.splice(y, 1, arr[z]);
        if (synthCreate(arrCopy).length < synthCreate(arr).length) {
          console.log(arr, '|', y, z)
          arr.splice(y, 1, arr[z])
          arr.splice(z, 1, arrCopyCopy[y])
          counter++;
        }
      }
    }


    return counter;
}

console.log(minimumSwaps([2, 1, 4, 3, 5]))