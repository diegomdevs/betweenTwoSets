function getTotalX(a, b) {
    var numbers = 0;
    var _loop_1 = function (i) {
        if ((a.every(function (element) { if (i % element === 0) {
            return true;
        } })) && (b.every(function (element) { if (element % i === 0)
            return true; }))) {
            numbers++;
        }
    };
    for (var i = 0; i <= 100; i++) {
        _loop_1(i);
    }
    return numbers;
}
console.log(getTotalX([3, 2], [3, 9, 6]));
