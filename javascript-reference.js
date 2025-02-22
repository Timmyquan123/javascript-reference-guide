// 🎯 **Variables**
let place = 'first';                   // ...... variableE

// 🔁 **Switch Statement**
switch (place) {
    case 'first':
        console.log('gold');
        break;
    case 'second':
        console.log('silver');
        break;
    default:
        console.log('no medal');
}

// ................

let place2 = 'first';

// 💡 **If Statement**
if (place2 == 'first') {
    console.log('gold');
} else if (place2 == 'second') {
    console.log('silver');
} else {
    console.log('no medal');
}

// ...............

// 🔁 **For Loop**
let array = [1, 2, 3];
for (let i = 1; i <= 3; i++) {
    const element = array[i];          
    console.log(element);  //......... for loop
}

// ...............

// 🔁 **While Loop**
let counter = 3;
while (counter >= 0) {
    console.log(counter);            //.......... while loop
    counter = counter - 1;
}

// ................

// 💡 **Functions Without Parameters**
function addNumber() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addNumber();  // ...... Functions

// 💡 **Functions With Parameters**
function addNumbe(a, b) {
    var c = a + b;
    console.log(c);  //........ functions with parameters
}
addNumbe(4, 7);

// 💡 **Return Values from Functions**
function getTotal(a, b) {
    return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

// ........

// 🔧 **Arrays**
var arr = ['tony', 'timi', 8]; //.......... Array

// ............

// 🛠 **Objects**
let storeManager = {};
storeManager.movement = 5;
storeManager.health = 30;

let storeManagerr = {
    movement: 6,
    health: 30,
    name: 'tony'
};

var house2 = {};
house2["rooms"] = 4;
house2['color'] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
};
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.pop();
console.log(fruits); // ['apple']



// 🛠 **Building Arrays with Functions**
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

function arrayBuilderReturn(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilderReturn('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']




// 🛠 **Objects with Methods**
var car = {};
car.color = "red";

// Adding a method to the object
car.turnKey = function() {
    console.log('engine running');
};
console.log(car);

// Add more methods
car.turnTheKey = function() {
    console.log("The engine is running");
};
car.lightsOn = function() {
    console.log("The lights are on.");
};
console.log(car);
car.turnTheKey();
car.lightsOn();



// ................



// ⚠️ **Error Handling (Try Catch Block)**
try {
    console.log(a + b);  // Intentional error
} catch (error) {
    console.log(error);
    console.log('there was an error');
    console.log('the error was never saved to log');
}
console.log('my program does not stop running');



// 🛠 **Throwing Custom Errors**
try {
    throw new ReferenceError();
} catch (error) {
    console.log(error);
    console.log('there was a reference error');
}
console.log('my program does not stop');



// ................



// 💡 **Error Handling in Functions**
function addTwoNums(a, b) {
    try {
        if (typeof(a) !== 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) !== 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}
addTwoNums(5, "5");
console.log("It still works");



// ................



// 🛠 **Functional Programming**
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {    
    return shoes * tax;
}  // Functional programming

var toPay = totalPrice(shoes, stateTax);
console.log(toPay); // 120



// 🛠 **Object-Oriented Programming (OOP)**
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('total price:', calculation);
    }
};
purchase1.totalPrice(); // 120

var purchase2 = {
    shoes: 500,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('total price:', calculation);
    }
};
purchase2.totalPrice(); // 600



// ................



// 🎯 **Template Literals** for String Interpolation
let userName = 'Alice';
let age = 25;
let greetingMessage = `Hello, ${userName}! You are ${age} years old.`;
console.log(greetingMessage); // 'Hello, Alice! You are 25 years old.'



// ➡️ **Arrow Functions** for Concise Code:
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12



// 🛠 **Destructuring**: Extracting values from objects and arrays:
const carDetails = { model: 'Toyota', year: 2022 };
const { model, year } = carDetails;
console.log(`The car is a ${year} ${model}.`); // 'The car is a 2022 Toyota.'



// 🛠 **Sets & Maps**
let uniqueNumbers = new Set([1, 2, 3, 4, 4]);
console.log(uniqueNumbers); // Set {1, 2, 3, 4}

let userInfo = new Map();
userInfo.set('name', 'Tony');
userInfo.set('age', 30);
console.log(userInfo.get('name')); // 'Tony'



// 🛠 **Promises & Async/Await** for Asynchronous Programming
const fetchData = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Data fetched successfully!');
    } else {
        reject('Error fetching data');
    }
});

fetchData
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

async function fetchDataAsync() {
    try {
        const response = await fetchData;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
fetchDataAsync();
