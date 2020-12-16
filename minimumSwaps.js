function minimumSwaps(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) {
            counter++;
            arr[arr.lastIndexOf(i+1)] = arr[i]
        }
    }
    return counter;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))