//medium hackerrank problem "New Year Chaos"
function minimumBribes(sortedAr) {
    //let qAr = q.split('\n');
    let numOfArs = 1//qAr[0];
    //qAr.shift();
    let q = [...sortedAr];
    sortedAr.sort((a, b) => a - b);
    for (let i = 1; i <= numOfArs; i+=2) {
        let ar = q//qAr[i];
        for (let x = 0; x < ar.length; x++) {
            console.log(ar.indexOf(ar[x]), sortedAr.indexOf(ar[x]))
            if (ar.indexOf(ar[x]) > sortedAr.indexOf(ar[x]) + 2 || ar.indexOf(ar[x]) < sortedAr.indexOf(ar[x]) - 2) {
                console.log('Too chaotic');
                break;
            }
            
        }
    }

}

minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])
