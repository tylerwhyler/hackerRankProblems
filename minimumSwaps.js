function minimumSwaps(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrI = arr[i];
        if (arrI != i + 1) {
            counter++;
            arr[arr.lastIndexOf(i+1)] = arrI
        }
    }
    return counter;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))