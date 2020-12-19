function countingValleys(steps, path) {
    // Write your code here
    let heightNum = 0;
    let numOfValleys = 0;
    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case "U":
                heightNum++;
                break;
            case "D":
                heightNum--;
                break;
        }
        if ((path[i] === "U") && (heightNum == 0)) {
            numOfValleys++;
        } 
    }
    return numOfValleys;
}
console.log(countingValleys(0, "DDUUDDUDUUUD"));