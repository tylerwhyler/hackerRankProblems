function staircase(n) {
    let hashvar = '';
    for (let i = 0; i < n; i++) {
        hashvar += ' ';
    }
    let hashvarArr = hashvar.split('');
    for (let i = 0; i < n; i++) {
        for (let x = 0; x <= i; x++) {
            hashvarArr.pop();
        }
        for (let x = 0; x <= i; x++) {
            hashvarArr.push('#');
        }
        console.log(hashvarArr.join(''));
    }
}

staircase(19);
