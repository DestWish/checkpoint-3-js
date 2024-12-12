function checkE(a, callback) {
  for (let e of a) {
    if (callback(e)) {
      return true;
    }
  }
  return false;
}

let a = [10, 20, 30, 40, 50, 60, 70, 3];
let res = checkE(a, (e) => e === 3);
console.log(res);
