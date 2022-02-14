function getTotalX(a = [], b = []) {
    // main formula = (i % aElement === 0) && (i % aElement === 0) && (b[0] % i === 0) && (b[1] % i === 0)
    let numbers = 0;
    for (let i = 0; i <= 100; i++) {
        if ((a.every((element) => {if (i % element === 0) {return true}})) && (b.every((element) => {if (element % i === 0) return true}))) {
            numbers++;
        }
    }
    return numbers;
}

console.log(getTotalX([2, 1], [1, 34));