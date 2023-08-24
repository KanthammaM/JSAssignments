//Assignment 1
// check if num is +ve, -ve or 0
let num = 25
if(num> 0){
    console.log(num+' is +ve number')
}
else if(num <0){
    console.log(num +' is -ve number')
}
else if(num == 0){
    console.log(num+' is zero')
}
else{
    console.log(num+ ' is not a number')
}

//Assignment 2
// factorial
let posInt = 5
let fact = 1;
if(posInt >0){
    for(i = posInt; i > 0; i--){
        fact = fact * i;
    }
}
console.log('5 factorial is '+ fact)

//Assignment 3
//greater number

findGreater = (a,b) => {
    if( a > b)
    return a
    else 
    return b
}
console.log('greater number among 34, -90 is ' +findGreater(34,-90))

//Assignment 4
//check palindrome
checkPalindrome = (str) => {
    let strArr = str.split('')
    let revArr = strArr.reverse()
    let revStr = revArr.join('')
    if(str == revStr )
    console.log(str +' is a palindrome')
    else
    console.log(str + ' is not a palindrome')
}
checkPalindrome('malayalam')

//Assignment 5
//prime numbers upto n
let n = 35
console.log('printing prime numbers upto 35')
for (let i = 1; i <= n; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Assignment 6
// calculator
const operator = prompt('Enter operator to perform the calculation ( +, -, * or / ): ');  
  

const num1 = parseFloat(prompt ('Enter the first number: '));  
const num2 = parseFloat(prompt ('Enter the second number: '));  
  
let result;   
  
if (operator == '+') {  
    result = num1 + num2;  
}  
else if (operator == '-') { 
    result = num1 - num2;  
}  
else if (operator == '*') { 
    result = num1 * num2;  
}  
else if (operator == '/'){  
    result = num1 / num2;   
}  
console.log( num1 + ' ' + operator + ' ' + num2 + ' = ' + result)

//Assignment 7
//vowel count in a string
countVowel = (str) => { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string to check vowel count: ');

const res = countVowel(string);

console.log('vowel count in the string '+ string + ' is '+ res);


//Assignment 8
// Perfect number
checkPerfect = () => {
 let checkNum = prompt('Enter a number to check if it is perfect number')
 let sum = 0
 if(checkNum > 0){
    let sum = 0
    for(i = 0; i < checkNum; i ++)
    if (checkNum % i == 0) {
        sum = sum + i;
    }
}
if (sum == checkNum)
    console.log("The number is perfect ");
else
    console.log("The number is not a perfect number");
}

checkPerfect()

//Assignment 9
// Fibinacci upto n
genFibonacci = () => {
const number = parseInt(prompt('Enter the number to generate fibonacci series upto: '));
let number1 = 0, number2 = 1, nextNumber;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(number1);
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
}
}
genFibonacci()


//Assignment 10
// multiplication table
table = () => {
    const tableNum = parseInt(prompt('Enter the number to generate multiplication table upto 10'));
    for(i = 1; i <= 10; i++){
        console.log(tableNum + ' x ' + i + ' = '+tableNum * i);
    }
}

table()


