function sumE(a) {
  let sum = 0;

  for (let e of a) {
    
    let num = Number(e);

    if (!isNaN(num)) {
      sum += num;
    }

  }
  return sum;
}

let a = ["40", "25", "03", "javascript", "5Hz"];
let res = sumE(a);
console.log(res);