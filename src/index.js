function getTotalX(a = [], b = []) {
    let numbers = 0;
    for (let index = 0; index < b.length; index++) {
        const aElement = a[index];
        const bElement = b[index];
        if (b[b.length - 1] / a[0] % aElement === 0) numbers++;
        if (b[b.length - 2] / a[1] % bElement === 0) numbers++;
    }
    return numbers;
}

console.log(getTotalX([2, 3], [2, 4]));