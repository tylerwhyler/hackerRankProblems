function exponentiation(n, p) {
    if (p <= 0) { //basecase
        return 1;
    } else {
        return n * exponentiation(n, p - 1);
    }
}

console.log(exponentiation(4, 4));