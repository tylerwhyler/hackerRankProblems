function diagonalDifference(arr) {
    // Write your code here
    let leftDiag = [];
    let rightDiag = [];
    for (let i = 0; i < arr.length; i++) {
        leftDiag.push(arr[i][i]);
        rightDiag.push(arr[i][arr.length - i - 1]);
    }
    function addArr (total, num) {
        return total + num;
    }
    return Math.abs(leftDiag.reduce(addArr) - rightDiag.reduce(addArr));
}


console.log(diagonalDifference([[-1, 1, -7, -8],
                                [-10, -8, -5, -2],
                                [0, 9, 7, -1],
                                [4, 4, -2, 1]]));