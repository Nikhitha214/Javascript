// 1. given number is multiple of 3 or not e.g.10900

let nn = 10900;
if (nn % 3 == 0) {
    console.log("the given number is multiple of 3");
}
else {
    console.log("not a multiple of 3");//not a multiple of 3
}


// 2. check particular sub-word exist in a string or not e.g. i am learning js: 'js'
// exists or not

let str = "i am learning js";
let subWord = "js";
if(str.includes(subWord)){
    console.log("sub-word exist in a string");//sub-word exist in a string
}
else{
    console.log("not exists");
}




// 3. calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time
// from user

function compoundInterest(principal, rate, time, n) {
    const amount = principal * Math.pow((1 + rate / (n * 100)), n * time);
    const interest = amount - principal;
    return interest;
  }
  const principal = parseFloat(prompt("Enter the principal amount: "));
  const rate = parseFloat(prompt("Enter the annual interest rate (in %): "));
  const time = parseFloat(prompt("Enter the time (in years): "));
  const n = parseInt(prompt("Enter the number of times interest is compounded per year: "));
  
  const interest = compoundInterest(principal, rate, time, n);
  console.log(`The compound interest is: ${interest.toFixed(2)}`);
