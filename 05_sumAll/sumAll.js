const sumAll = function(min, max) {
    let sum = 0;
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (max < min){
        let temp = min;
        min = max;
        max = temp;
    }
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
