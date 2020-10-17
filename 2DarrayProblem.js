function main() {
    let arr = [[0, -4, -6, 0, -7, -6], //sample input since not using stdin
              [-1, -2, -6, -8, -3, -1],
              [-8, -4, -2, -8, -8, -6],
              [-3, -1, -2, -5, -7, -4],
              [-3, -5, -3, -6, -6, -6],
              [-3, -6, 0, -8, -6 ,-7]];//Array(6);
    // for (let i = 0; i < 6; i++) {
    //     arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // }
    let masterCount = Number.NEGATIVE_INFINITY;
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let x = 0; x < arr[i].length - 2; x++) {
            count = arr[i][x]+arr[i][x+1]+arr[i][x+2]+arr[i+1][x+1]+arr[i+2][x]+arr[i+2][x+1]+arr[i+2][x+2];
            if (masterCount < count) masterCount = count;
            count = 0;
        }
    }
    return console.log(masterCount)
}

main();