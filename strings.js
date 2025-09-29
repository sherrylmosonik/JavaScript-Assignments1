                  // JavaScript String Exercises (Beginner to
                             //  Advanced)

//  Level 1: Basics

//  1. Declare a string 'JavaScript is fun' and: - Print its length - Print the first and last character
let str="JavaScript is fun"
console.log(str.length);
console.log(str[0]);
console.log(str[str.length-1]);

//  2. Store your full name in a string and: - Print it in uppercase - Print it in lowercase
let fullName="Sherryl Mosonik"
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//  3. Create a string ' Nairobi ' with extra spaces. Remove the spaces using .trim() and print the result.
let city="   Nairobi   "
console.log(city);
console.log(city.trim());

//  4. Print the character at index 3 of the string 'HelloWorld'.   
let greet="HelloWorld"
console.log(greet[3]);                          

//  Level 2: Manipulation

//  5. Extract 'Script' from 'JavaScript' using .slice().
let lang="JavaScript"
console.log(lang.slice(4,10));

//  6. Replace 'PHP' with 'JavaScript' in the string 'I love PHP'.
let statement="I love PHP"
console.log(statement.replace("PHP","JavaScript"));

//  7. Split 'Mango,Banana,Apple' into an array and print the second fruit.
let fruits="Mango,Banana,Apple"
let fruitArray=fruits.split(",");
console.log(fruitArray[1]);

//  8. Concatenate 'Hello' and 'World' into a single string using: - + operator - .concat() method
let greetOne="Hello"
let greetTwo="World"
console.log(greetOne + " " + greetTwo);
console.log(greetOne.concat(" ",greetTwo));

//  9. Create a program that repeats the string 'Hi! ' 5 times using .repeat()
let greetings="Hi!\n"
console.log(greetings.repeat(5));

//  Level 3: Problem Solving

//  10. Write a program that counts the number of vowels (a, e, i, o, u) in the string 'Hello Kenya'.
let country="Hello Kenya"
let count=0;
for (let i=0;i<country.length;i++){
    let char=country[i].toLowerCase();
    if (char==='a'|| char==='e'|| char==='i'|| char==='o'|| char==='u'){
        count++;
    }
}
console.log("Number of vowels: " + count);

//  11. Reverse the string 'Code' and print the result (edoC).
let word="Code"
let reversed="";
for (let i=word.length-1;i>=0;i--){
    reversed+=word[i];
}
console.log(reversed);

//  12. Check if the word 'level' is a palindrome (same forwards and backwards).
let palin="level"
let rev="";
for (let i=palin.length-1;i>=0;i--){
    rev+=palin[i];
}
if (palin===rev){
    console.log(palin + " is a palindrome");
}
else{
    console.log(palin + " is not a palindrome");
}

//  13. Write a program that replaces all spaces in 'I love JavaScript' with dashes -. Output:
let phrase="I love JavaScript"
let dashed=phrase.replaceAll(" ","-")
console.log(dashed);

//  14. Create a function that takes a string and capitalizes only the first letter. Input: 'javascript' →
//  Output: 'Javascript'
function capitalizeFirstLetter(str){
    if (str.length===0) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("javascript"));

// Level 4: Challenges

//  15. Write a program that counts how many times the letter 'a' appears in 'Banana'.
let fruit="Banana"
let Count=0;
for (let i=0;i<fruit.length;i++){
    if (fruit[i].toLowerCase()==='a'){
        Count++;
    }
}
console.log("Number of 'a': " + Count);
//  16. Given a sentence 'Coding is interesting', print only the first word.
let sentence="Coding is interesting"
let firstWord=sentence.split(" ")[0];
console.log(firstWord);

//  17. Ask the user (via prompt) to enter their name, and then print: 'Hello, [name], welcome to
//  JavaScript!'
const prompt = require("prompt-sync")();

let userName="";
userName=prompt("Enter your name:");
console.log("Hello, " + userName + ", welcome to JavaScript!");

//  18. Write a program that extracts the last 4 characters from 'development'.
let dev="development"
let lastFour=dev.slice(-4);
console.log(lastFour);

//  19. Create a program that checks if an email string contains '@' and ends with '.com'.
let email=""
email=prompt("Enter your email:");
if (email.includes("@") && email.endsWith(".com")){
    console.log("Valid email"); 
}
else{
    console.log("Invalid email");
}

//  20. Write a program that finds the longest word in the sentence 'Learning JavaScript is really fun'
let sent="Learning JavaScript is really fun"
let words=sent.split(" ");
let longestWord="";
for (let word of words){
    if (word.length>longestWord.length){
        longestWord=word;
    }
}
console.log("Longest word: " + longestWord);
