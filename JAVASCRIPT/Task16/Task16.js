// 1. display even numbers upto n number (ask user for number)

// var value = 0, Num;
// Num = prompt("enter a value:");
// while (value < Num) {
//     value = value + 2;
//     document.write(value + "<br>");
// }


// 2. ask user for the input, whether char is vowel or consonant

// let Z, lowercaseLetter, uppercaseLetter;
// Z = prompt("Enter a alphabet ");
// lowercaseLetter = (Z =='a' || Z == 'e'|| Z =='i' || Z == 'o' || Z =='u');
// uppercaseLetter = (Z =='A' || Z == 'E'|| Z =='I' || Z == 'O' || Z =='U');
//  if(lowercaseLetter || uppercaseLetter)
// {
//   alert("Vowel letter");
// document.write(Z + "  is a Vowel letter")
// }
// else{
//   alert("Consonant letter");
// document.write(Z + "  is a Consonant");
// }

// 3. count of even and odd number from 1 to 999
function countEvenAndOdd() {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= 999; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    alert(
        "No.of Even Numbers:\n" + evenCount + "\nNo.of Odd Numbers:\n" + oddCount
    );
}

// 4. count occurrence of a particular character in a string (hello: count of l is 2):
// loops

// function countString(str, char) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {

//       if (str[i] == char) {
//         count++;
//       }
//     }
//     return count;
//   }
//   const string = "hello"
//   const letterToCheck = prompt('Enter a letter to check: ');
//    const result = countString(string, letterToCheck);
//    console.log("count occurence in hello: " + result);

// 5. sum and average of array elements [1, 9, 8];

function AverageAndSum() {
    const arr = [1, 9, 8];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;

    document.write(
        "The result of Sum is: " +
        sum +
        "<br>" +
        "The Result of Average is : " +
        average
    );
}


// 6. largest number in an array (do with loops)

function largestNum() {
      let numbers = [32, 73, 24, 87, 51];
      let highest = numbers[0];
    
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
          highest = numbers[i];
        }
      }
      document.write("The largest number in the array is : " + highest);
    }
