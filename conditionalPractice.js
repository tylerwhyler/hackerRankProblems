function main(num) {
    const N = num;
    //parseInt(readLine(), 10);

    if (N % 2 === 1) {
        console.log('Weird');
    } else if (N % 2 === 0 && 6 <= N && N <= 20) {
        console.log('Weird');
    } else {
        console.log('Not Weird');
    }
}

main(2);
main(6);
main(9);
main(65);
main(17);
main(345345);
main(676);
main(91);
main(43);
main(42);
