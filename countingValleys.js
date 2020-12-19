//counting Valleys easy hackerrank problem
function countingValleys(steps, path) {
    // Write your code here
    let heightNum = 0;
    let numOfValleys = -1;
    for (let i = 0; i < path.length; i++) {
        console.log(path[i], heightNum)
        if (path[i] === "U") {
            heightNum++;
        } if (path[i] === "D") {
            heightNum--;
        } if (path[i-1] === "U" && heightNum == 0) {
            numOfValleys++;
        }
    }
    return numOfValleys;
}

console.log(countingValleys(0, "DDUUDDUDUUUD"));