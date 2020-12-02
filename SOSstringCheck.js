function marsExploration(s) {
    let counter = 0;
    for (let i = 1; i < s.length; i += 3) {
        if (s[i-1] != "S") counter++;
        if (s[i] != "O") counter++;
        if (s[i+1] != "S") counter++;
    };
    return counter;
};

console.log(marsExploration('SOSSOSJOJSOSFRK')) //Should output '5', because there are 5 characters that aren't correct if SOS is supposed to be repeated.