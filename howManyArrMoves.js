//medium hackerrank problem "New Year Chaos"
function minimumBribes(sortedAr) {
    let ar = [...sortedAr];
    sortedAr.sort((a, b) => a - b);
    let bribeCount = 0;
    for (let x = 0; x < ar.length; x++) {
        console.log(ar.indexOf(ar[x]), sortedAr.indexOf(ar[x]));
        if (ar.indexOf(ar[x]) < sortedAr.indexOf(ar[x]) - 2) {
            console.log('Too Chaotic');
            break;
        }
    }
    console.log(bribeCount);
}

minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])
           // [1, 2, 3, 4, 5, 6, 7, 8]
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])