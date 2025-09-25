// Conceptual Questions

// What is a variable in JavaScript?
console.log(`A variable in JavaScript is a container that holds data values 
that can be referenced and manipulated throughout the code .`) ;

// What are the differences between var, let, and const?
console.log(`var= when used inside a function,it is only accessible within that function scope and if outside,then it becomes global.It can be re-declared and updated.
let= it is only accessible within the block it is defined.It can be updated.
const= it is also block-scoped and cannot be updated or re-declared.It must be initialized at the time of declaration.`) ;
// Why do we use variables instead of writing values directly?
console.log(`We use variables to store data values that can be reused and manipulated
throughout the code, making it more efficient and easier to maintain.`) ;
// What are the rules for naming variables in JavaScript?
console.log(`1.Variable names must begin with a letter,underscore(_),or dollar sign($).
2.Variable names can contain letters,numbers,underscores,and dollar signs.
3.Variable names are case-sensitive.
4.Variable names cannot be a reserved keyword in JavaScript.`) ;
// Can a variable name start with a number? Give an example.
console.log(`No,a variable name cannot start with a number.Example:let 1name= "Sherryl" is invalid.`) ;



// Variables declared with let can be reassigned. (T/F)
console.log(true);
// A variable name in JavaScript can contain spaces. (T/F)
console.log(false);
// const variables must be given a value when declared. (T/F)
console.log(true);
// Variable names in JavaScript are case-sensitive. (T/F)
console.log(true);
// The value of a const variable can be changed later. (T/F)
console.log(false);


// Exercise 1: Store and Display Your Details

// Create variables for:

// Your name
let myName="Sherryl";
// Your age
let age=20;
// Your country
let country="Kenya";
// Print them in a single sentence. Example Output: My name is Peter, I am 25 years old, and I live in Kenya.
console.log(`My name is ${myName}, I am ${age} years old, and I live in ${country}.`); 


// Exercise 2: Simple Math with Variables

// Declare two numbers (num1 and num2).
let num1=10;
let num2=5;
// Print:

// Their sum
console.log(num1 + num2);
// Their difference
console.log(num1 - num2);
// Their product
console.log(num1 * num2);
// Their division result
console.log(num1 / num2);


// Exercise 3: Swap Two Values

// Create two variables a = 10 and b = 20.
let a=10;
let b=20;
console.log(`Before swapping: a = 10, b = 20`);
// Swap their values using a third variable.
let temp=a;
a=b;
b=temp;

// Print before and after swapping.

console.log(`After swapping: a = ${a}, b = ${b}`);


// Exercise 4: Update Variable

// Create a variable score = 50.
let score=50;
// Increase it by 10.
score += 10;
// Print the updated value.
console.log(`The updated score is: ${score}`);