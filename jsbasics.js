/*
High level intrepreted lang
No compiler 
oops, functional
lang of the browser(client side prog)
Dynamically typed

***Variables***
var, let, const
var - global scope
let - variable 
const - constant(must be initialised, since cannot reassign)

Data types(String, Number, Boolean, null, undefined, primitive data tyypes )

typeof(null) is object(but its not really an object, its null)
https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/

non premitive data types are objects and collection of primitive data types
let newObj = new Object();
// Create an empty generic object
let obj = new Object();

let person = {
    firstName : 'Aditya',
    lastName : 'Man',
}
*****Destructuring of an object ******
const {firstName, lastName} = person;
gets the firstName and lastName of obj person
usually we use array of objects in daily life cases, like array of todo objects
if we want to send it to a server, we have to change it to JSON,
JSON.stringify(arrayName)


Arrays 
let a = []
const a = new Array(1,2,3)
Can have multiple datatypes in an array [1, 1.3, "Hi"]
a.push(1) appaend at last
.unshift add at the start
array.shift(), gets the 1st element of array 
.pop()
Check if its array Array.isArray(a);
a.indexOf(2);

typeof person is object

template string (using `)
`This is ${person.firstName}`

person.firstName.substring(0,3) output Adi last index excluded
.toUpperCase().toLowerCase()

s.split('') returns an array after split 

***Loops***
for(let i=0;i<1;i++)
for(let todo:todos)
forEach(to loop), map(created new array), filter(filters and created new array)

what is callback 
A callback function in JavaScript is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or routine.
Callback functions are used to handle asynchronous operations, such as handling data fetching, responding to events, or executing code after a delay. They allow the program to continue running while waiting for tasks to complete
asynchorous-the timer wont effect the execution of other functions, other functions wont wait for the timer to end 
****Call back function example
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Alice", age: 25 };
        callback(data);
    }, 2000); // Simulates network delay
}
fetchData((data) => {
    console.log("Data received:", data);
});

terinary operator : mostly used to conditionaly render jsx/htm elements 
switch

functions, arrow functions
function add(num1, num2){
    return num1+num2;
    }
const add = (num1, num2) => {return num1+num2;}
const add = (num1, num2) => num1+num2;

practice some questions, forEach, functions etc - in jsBasicPrac.js
in map and filter we must return something in every iteration, so that will add to the final array thats returned

sort function - of no function if passed, converted to strings and sorted, else
array.sort((a,b) => a-b), 
if a < b (a-b) gives -vem so a must come 1st 
... likewise for a>b and a===b

Oops in JavaScript

there are two styles to create a class
1, using functions 

function createPerson(name){
    obj = {}
    obj.name = name;
    obj.getName = () => obj.name;
    return obj;
}

const Chris = createPerson("Chris");
console.log(Chris.getName());

2. using constructor

function Person(name){
    this.name = name;
    this.getName = () => this.name;
}

const Chris = new Person("Chris");
console.log(Chris.getName());

****Prototypes - Prototypes are the mechanism by which JavaScript objects inherit features from one another.
Every object in JS has a property called prototype, and prototype is also an object, So it also has a prototype
this is called prototype chain, it continues untill we reach null

basic prototype is Object.prototype, its prototype is null
Shadowing - overwriting properties of prototype 

Two ways to set a prototype
1. using Object.create(objName), creates an object which has objName as prototype
2. using constructor - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#using_a_constructor

Best practice is to have methods defined in prototype - defining class does the same, 
the methods gets defined in the prototype and variables in the class
// prtotype is an object
const personPrototype = {
    great() {
        console.log("Hello");
    }
}
function Person(name){
    this.name = name;
}
Object.assign(Person.prototype, personPrototype)



*/