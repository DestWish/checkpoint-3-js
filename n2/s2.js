function changeE(a, n) {
    return a.map(i => i * n);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = changeE(a, 3);
console.log(res); 