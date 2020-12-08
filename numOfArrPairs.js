function sockMerchant(n, ar) {
    //"sales by match" on hackerrank
    let pairCount = 0;
    for (let i = 0; i <= n; i++) {
        if (ar.indexOf(ar[i]) != ar.lastIndexOf(ar[i])) {
            pairCount++;
            ar.splice(ar.lastIndexOf(ar[i]), 1);
            ar.splice(ar.indexOf(ar[i]), 1);
            i--;
        }
    }
    return pairCount;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) //3 pairs of numbers, should return 3.