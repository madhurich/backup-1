function sum(a, b) {
    if (typeof a == 'string') {
        a = parseInt(a);
    }
    if (typeof b != 'number') {
        b = parseInt(b);
    }
    return a + b;
}
console.log(sum('5', 6));
