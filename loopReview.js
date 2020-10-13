function processData(input) {
    //Enter your code here
    let inputArr = input.split('\n');
    inputArr.shift();
    let evenArr = '';
    let oddArr = '';
    for (let i = 0; i < inputArr.length; i++) {
        for (let x = 0; x < inputArr[i].length; x++) {
            if (x % 2 === 0) {
                evenArr += inputArr[i][x];
            } else oddArr += inputArr[i][x];
        }
    console.log(evenArr + ' ' + oddArr);
    evenArr = '';
    oddArr = '';
    }
} 

processData('tyler\nmynamehere')