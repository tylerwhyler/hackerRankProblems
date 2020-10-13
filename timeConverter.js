function timeConversion(s) {
    /*
     * Write your code here.
     */
    if (s.slice(-2) === "AM") {
        if (s.slice(0, 2) == 12) {
            return("00" + s.slice(2, -2))
        }
        return(s.slice(0, -2))
    } else {
        if (s.slice(0, 2) == 12) {
            return(s.slice(0, -2))
        }
        let firstS = Number(s.slice(0, 2))+12;
        let secondS = s.slice(2, -2);
        return(firstS + secondS);
    }

}

console.log(timeConversion('12:05:41PM'));
console.log(timeConversion('01:05:41AM'));
console.log(timeConversion('12:05:41AM'));
console.log(timeConversion('05:05:41PM'));
console.log(timeConversion('10:05:41AM'));