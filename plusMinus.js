// Given an array of integers, calculate the ratios of its elements that are positive,
// negative, and zero. Print the decimal value of each fraction on a new
// line with 6 places after the decimal.

function plusMinus(arr) {
    let minusCount;
    let plusCount;
    let zeroCount;

    arr.forEach(i => {
        if (i < 0) {
            minusCount++;
        }
        if (i > 0) {
            plusCount++;
        }
        if ((i = 0)) {
            zeroCount++;
        }
    });
    console.log(plusCount / arr.length);
    console.log(minusCount / arr.length);
    console.log(zeroCount / arr.length);
    return;
}
//test
plusMinus([1, 1, 0, -1, -1]);
