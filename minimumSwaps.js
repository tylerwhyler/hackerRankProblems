function minimumSwaps(sortedArr) {
    let arr = [...sortedArr]; 
    sortedArr.sort((a, b) => a - b);
    let counter = 0;
    function synthCreate(synthArr) {
      let newSynthArr = '';
      sortedSynthArr = [...synthArr];
      sortedSynthArr.sort((a, b) => a - b);
      for (let x = 0; x < synthArr.length; x++) {
        if (synthArr[x] != sortedSynthArr[x]) {
          newSynthArr += synthArr[x];
        }
      }
      return newSynthArr.split('')
    }
    for (let y = 0; y < arr.length; y++) {
      for (let z = 0; z < arr.length; z++) {
        if (synthCreate(arr.splice(arr[y], arr[z])).length < synthCreate(arr).length - 1) {
          console.log(arr, '||', y, z)
          arr.splice(arr[y], arr[z]);
          counter++;
        } else if (synthCreate(arr.splice(arr[y], arr[z])).length < synthCreate(arr).length) {
          arr.splice(arr[y], arr[z]);
          counter++;
        } 
      }
    }
    

    return counter;
}

console.log(minimumSwaps([2, 3, 4, 1, 5]))