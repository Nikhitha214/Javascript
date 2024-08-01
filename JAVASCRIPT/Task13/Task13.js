// 1. create an object for animal, car.

const animal = {
    type: "Dog",
    gender: "Female",
    age: "5 years",

    car: {
        carName: "Breeza",
        color: "red",
        company: "maruti",
        displayName: function () {
            console.log("Hello")
        }
    }
}
console.log(animal.age);//5 years
console.log(animal.car.color);//red
console.log(animal.car.displayName);//ƒ (){
//     console.log("Hello")
// }



// 2. find the duplicate in a string() (use array) - optional
function findDuplicates(str) {
    let charArray = str.split('');
    let charCount = {};
    let duplicates = [];

    // Count the occurrences of each character
    charArray.forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    });

    // Find duplicates
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

// Example usage
let inputString = "programming";
document.getElementById("original-string").innerText = inputString;

let duplicateCharacters = findDuplicates(inputString);
document.getElementById("duplicate-characters").innerText = duplicateCharacters.join(", ");
document.body.style.color = "red";
// 3. reverse a string (use array method)

//for string the reverse metho is not working directly it onlysupports in array. so for this we need to add split and join methods.
let string = "Nikhitha"
function reverseString(string) {
    return string.split("").reverse().join("");

}
console.log(reverseString(string));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];


// const fruits2 = fruits.reverse();

// console.log(fruits2)


// 4. find the highest and lowest value in array

let array = [2, 3, 5, 1, 8, 90, 4000];
function high(arr) {
    arr.sort(function (a, b) { return a - b })
    return arr[arr.length - 1];
}
function low(arr) {
    arr.sort(function (a, b) { return a-b });
    return arr[0];
}
console.log(low(array)+ " is lowest value");
console.log(high(array) + " is greatest value");


// 5. sorting of an array - optional

let num = [21,3,4,1,90];
console.log(num.sort());//[1, 21, 3, 4, 90]
let n= num.sort(function(a,b) {return a-b })
console.log(n)//[1, 3, 4, 21, 90]

// 6. display first 3 elements in an array in UI
 
let flowers = ["lily" ,"rose", "marigold","lotus","jasmine","sunflower"];
let flower = (flowers.slice(0,3));//(3) ['lily', 'rose', 'marigold'];
//  document.write(flower);
document.getElementById("floweer").innerHTML = flower;
console.log(flower);
    

// 7. remove 4th (index) element and add 2 element there
let flowers1 = ["lily" ,"rose", "marigold","lotus","jasmine","sunflower"];
let flow = (flowers1.splice(4,1,"Tulip","Daisy"));//removed jasmine
document.getElementById("flowe").innerHTML = flow;
console.log(flow);//(7) ['lily', 'rose', 'marigold', 'lotus', 'Tulip', 'Daisy', 'sunflower']
