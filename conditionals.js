// If statement
const hour = 25;
if (hour < 18) {
    console.log("conditon was met");
} 


// Else Statement
const hour = 20;
let greeting;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting) 


// Else If Statement
const time = 21;
let greeting;
if (time < 10) {
  greeting = "Good Morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} 