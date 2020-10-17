function exponentiation(n) {
    if (n <= 1) { //basecase
        return 1;
    } else {
        return n ** exponentiation(n - 1);
    }
}

console.log(exponentiation(4));