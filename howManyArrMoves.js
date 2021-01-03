//medium hackerrank problem, "New Years Chaos"

function minimumBribes(sortedAr) {
    let ar = [...sortedAr];
    sortedAr.sort((a, b) => a - b);
    let sortedArCopy = [...sortedAr]
    let bribeCount = 0;
    for (let x = 0; x < ar.length; x++) {
        if (ar.indexOf(ar[x]) < sortedAr.indexOf(ar[x]) - 2) {
            return console.log('Too chaotic');
        }
        sortedArCopy.splice(x, 0, ar[x]);
        bribeCount += Math.abs(x - sortedArCopy.lastIndexOf(ar[x]) + 1)
        sortedArCopy.splice(sortedArCopy.lastIndexOf(ar[x]), 1)
    }
    console.log(bribeCount);
}


minimumBribes([2, 1, 5, 6, 3, 4, 9, 8, 11, 7, 10, 14, 13, 12, 17, 16, 15]) //should return 16