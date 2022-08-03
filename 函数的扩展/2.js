function tco(f) {
    var value;
    var active = false;
    var accumulated = [];
    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

function f(x, y) {
    if (y > 0) return sum(x + 1, y - 1);
    return x;
}
var sum = tco(f)

console.log(sum(1, 10));