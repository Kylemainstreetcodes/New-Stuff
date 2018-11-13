var myNumber = 3;

var myString = "Hello";

console.log(myNumber + myString);

var myBoolean = true;

console.log(3 === 3); 

if (3 === "3") {
  console.log("They're Equal!");
} else if (3 === "3") {
  console.log("These are though!");
} else {
  console.log("They're NOT Equal!");
}

var myArray = [1, 2, 3, "Hello!"];
myArray.push(true);
console.log(myArray);

myArray.pop();
console.log(myArray);

var myObject = {name: "Mitch", age: 24};

console.log(myObject.name);
console.log(myObject["age"]);  //we must use bracket notation when calling data

myObject.hairColor = "Black";
console.log(myObject);

var i = 0; 
while (i < 5) {
  console.log("Hello");
  i++;
}
// counter variable being declared; will call i as longs as its less than 5; increase by 1 until 5
for (var i = 0; i < 5; i++){
  console.log("Hello");
}

var numbers = [1, 2, 3, 4, 5]

for (var i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// same as a method in rails



function sayHi(name){
  console.log("Hello!" + " " + name);
  console.log(`Hello ${name}`);
}
sayHi("Kyle");

var goodbye = function(){
  console.log("Bye!")
}
goodbye();

function palindrome(string){
  var reversedString = string.split("").reverse().join("");
  console.log(string === reversedString);
}

palindrome("racecar");
palindrome("hello");

function fizzbuzz(){
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0){
    console.log("Fizz");
    } else if(i % 5 === 0) {
      console.log("Buzz")
    } else {console.log(i);
      }
    }
fizzbuzz();
