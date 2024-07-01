//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the 
//last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for 
//arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//using the first and last element we will subtract them and get the result.
let lastIndex = ages.length - 1;
let difference = ages[lastIndex] - ages[0];
console.log("Change between first and last element:", difference);
//added new age
ages.push(38);
//subtracting first and last age again to see new difference
lastIndex = ages.length - 1; 
difference = ages[lastIndex] - ages[0];
console.log("Change after adding new age:", difference);
//adding ages
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
//average age
let average = sum / ages.length;
console.log("Average age:", average);

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim',
// 'Sally', 'Buck',
//   'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated
// by spaces.

let names = ['sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);

//concatenating all the names together.
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i !== names.length - 1) {
        concatenatedNames += '';
    }
}
console.log("Concatenated names:", concatenatedNames);

//3. How do you access the last element of any array?
//Answer: By using the - 1 index.  By using the array[array.length - 1], you can access the last 
//element in the array.



//4. How do you access the first element of any array?
//Answer: By using the 0 index.  By using the array[0], you can access the first element in the 
//array.

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created 
//names array 
//   and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

//let names = ['Billy', 'Josh', 'Fred', 'Jeremy', 'Sarah', 'Chase'];
//let nameLengths = '';
//adding the length of names to the array.
//for (let i =0; i < names.length; i++) {
//    nameLengths.push(names[i].length);
//}
//console.log(nameLengths); //produces the amount of letters in the names

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the 
//elements in the array.

//let sum = 0;

//for (let i = 0; i < nameLengths.length; i++) {
//    sum += nameLengths[i];
//}
//console.log("Sum")

//7. Write a function that takes two parameters, word and n, as arguments and returns the word 
// concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect 
//the function to return 'HelloHelloHello').

function concatenateWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

console.log(concatenateWord('Hello', 3));

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//   The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Chase', 'Rannals'));

//9. Write a function that takes an array of numbers and returns true if the sum of all the 
//numbers in the array is greater than 100.

function sumOfAll(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum > 100;
}

console.log(sumOfAll([12, 40, 90]));
console.log(sumOfAll([5, 10, 30]));

//10. Write a function that takes an array of numbers and returns the average of all the 
//elements in the array.

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

console.log(sumOfNumbers([10, 20, 40, 50]));
console.log(sumOfNumbers([50, 60, 70, 80, 90]));

//11. Write a function that takes two arrays of numbers and returns true if the average of the 
//elements in the first array is greater than the average of the elements in the second array.

function compareArrays(arr1, arr2) {
    let sum1 = 0;
    for (let num of arr1) {
        sum1 += num;
    }
    const avg1 = sum1 / arr1.length;
    let sum2 = 0;
    for (let num of arr2) {
        sum2 += num;
    }
    const avg2 = sum2 / arr2.length;
    return avg1 > avg2;
}

console.log(compareArrays([20, 15, 30, 25], [40, 70, 25, 20]));
console.log(compareArrays([40, 50, 20, 15], [30, 20, 15, 40]));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
//moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 12));
console.log(willBuyDrink(true, 4));
console.log(willBuyDrink(false, 20));
console.log(willBuyDrink(false, 2));


//13. Create a function of your own that solves a problem. In comments, write what the function 
//does and why you created it.

function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}
const myAge = 38;
console.log("I was born in " + getBirthYear(myAge));

//This tells you what year you are born in.