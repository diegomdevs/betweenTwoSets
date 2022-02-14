function getTotalX(a: Array<number>, b: Array<number>): number {
    let numbers: number = 0;
    for (let i = 0; i <= 100; i++) {
        if ((a.every((element) => {if (i % element === 0) {return true}})) && (b.every((element) => {if (element % i === 0) return true}))) {
            numbers++;
        }
    }
    return numbers;
}

console.log(getTotalX([2, 6], [24, 36]));