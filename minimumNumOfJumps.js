//hackerrank easy. "Jumping on the Clouds"
function jumpingOnClouds(c) {
    let jumpCount = 0;
    for (let i = 0; i < c.length - 1; i++) {
        if (c[i+2] == 0) {
            jumpCount++;
            i++;
        } else {
            jumpCount++;
        }
    }
    return jumpCount;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])