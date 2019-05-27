for (let i = 2; i < 10; i++) {
    let dividers = 0;
    for (let j = 0; j < 5; j++) {
        if (i % j == 0) {
            dividers++;
        }
    }
    if (dividers<3) {
        console.log(i);
    }
}