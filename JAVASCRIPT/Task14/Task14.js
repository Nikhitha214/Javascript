// 1. Create parameterized method/function to multiply 3 numbers

function Multiply(a,b,c){
    let d = a*b*c;
    console.log(d);//24
}
Multiply(2,3,4);

// 2. create parameterized method to divide 2 numbers

function Division(x,y){
    let z=x/y;
    console.log(z);//2

}
Division(10,5);

// 3. create a method to add background color to div element
  
function backGroundColor(){
    document.body.style.backgroundColor = "plum";
    console.log("you clicked me")
}
// 4. write function to generate random background color of body (hint:
// Math.random())

function randomColor(){
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let bgColor = "rgb(" + r + "," + g + "," + b + ")";
console.log(bgColor);
document.body.style.backgroundColor = bgColor;
}
randomColor();

// 5. onload of your webpage, display modal (bootstrap 4 or 5):

        window.onload = function() {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        };