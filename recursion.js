function exponentiation(n, p) {
    if (p <= 0) { //base case
        return 1; //multiplicative identity
    } else { //recursive case
        return n * exponentiation(n, p - 1); //this is the actual recursive part of the function
    }
}

console.log(exponentiation(4, 4));