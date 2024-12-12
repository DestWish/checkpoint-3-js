function reverseI(a) {
    let reversedA = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversedA.push(a[i]);
    }
    console.log(reversedA);
}

let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];
reverseI(a);