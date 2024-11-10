// Write a function that takes an array of numbers and logs each number multiplied by 2 using forEach.
const mul2 = arr => {
    arr.forEach((num) => console.log(num*2));
}
mul2([1,2,3])

// Create a function that takes an array of names and uses forEach to log a greeting message for each name (e.g., "Hello, [name]!").
const great = names => {
    names.forEach((name) => console.log(`Hello ${name}`))
}
great(['adi','sasi'])

// Write a function that counts and logs the number of even numbers in an array
const countEven = nums => {
    let count = 0;
    nums.forEach((num)=> {
        if(num%2==0){
            count++;
            console.log(`${num} is even`) // console has \n, dont write
        }
    })
    console.log(`There are ${count} even numbers`)
}
countEven([1,2,3,4])

// Write a function that takes an array of numbers and returns a new array with each number squared 
// using forEach 
const sq = arr => {
    let sqArr = [];
    arr.forEach((num) => {
        // sqArr = [...sqArr, num*num]
        sqArr.push(num);
    })
    return sqArr;
}
console.log(sq([1,2,3]))
// using map
const sqMap = nums => {
    return nums.map(num => num*num)
}
console.log(sqMap([1,2,3]))

// Create a function that takes an array of strings and returns a new array with each string's length
const stringsLens = strings => {
    return strings.map(str => str.length);
}
console.log(stringsLens(["sda", "sdfd", "sdufh"]))

// Write a function that converts an array of Celsius temperatures to Fahrenheit
const ctof = temps => {
    return temps.map(temp => temp*9/5 + 32)
}
console.log(ctof([321,421,532]))

// Write a function that takes an array of numbers, filters out numbers less than 10, and then squares the remaining numbers
const lessTenSq = nums => {
    return nums.filter(num => num<10).map(num => num*num);
}
console.log(lessTenSq([1,5,10,15]));

// Create a function that takes an array of objects representing books
//  (with title and rating properties) and returns a new array with the titles of books with a rating higher than 4.0.

const books = [
    book1 = {name:"b1",rating:4},
    {name : "b2", rating:3.5},
    {name : "b3", rating :5}
]

const bookNamesLess4 = books => {
    return books.filter(book => book.rating<4).map(book => {return book.name});
}
console.log(bookNamesLess4(books));
// use .map after .filter to get only desired parts of an object 

// Write a function that takes an array of numbers, removes duplicates, squares each number, and returns a sorted array of the results.
const numSq = nums => {
    return [... new Set(nums)].map(num => num*num);
}
console.log(numSq([1,1,2,4,3]));
// new Set(), give a set

// flattern array [[1, 2], [3, 4], [5, 6]]
const flatArray = arr => {
    let res = []
    arr.forEach(a => {
        a.forEach(i => res.push(i));
    })
    return res;
}
console.log(flatArray([[1, 2], [3, 4], [5, 6]]));


