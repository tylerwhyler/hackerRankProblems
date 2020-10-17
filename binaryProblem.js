function main() {
    // Point was to count the longest string of consecutive 1s in the binary form of a given base 10 number.
    const n = 524275 //parseInt(readLine(), 10);
    let biNum = (n >>> 0).toString(2).split('');
    let consecCount = 0;
    let consecCountCopy = 0;
    for (let i = 0; i < biNum.length; i++) {
        // console.log(consecCount, consecCountCopy)
        if (biNum[i] == 1) {
            consecCount++;
            if (consecCount > consecCountCopy) {
                consecCountCopy++;
            }
        } else {
            if (consecCountCopy < consecCount) consecCountCopy = consecCount;
            consecCount = 0
        };
    }
    return console.log(consecCountCopy);
}

main()