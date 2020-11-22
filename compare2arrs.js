function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for (let i = 0; i <= 2; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } if (a[i] < b[i]) {
            bobScore++;
        } 
    }
    return (`${aliceScore} ${bobScore}`); // specific format required to pass
}