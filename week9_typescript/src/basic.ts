//static typing
//specifes the type of the variable
var message : String = "Hey there"

//Error - number cannot be assigned to string
//compile time error
//message = 10

var number : Number = 10
var check : Boolean = true

//variable declared with any can be assigned any type
var x : any = 10
console.log(`X: ${x}, type: ${typeof x}`);

x = "hello"
console.log(`X: ${x}, type: ${typeof x}`);

x = true
console.log(`X: ${x}, type: ${typeof x}`);

x = 3.14
console.log(`X: ${x}, type: ${typeof x}`);


console.log(`Message: ${message}, type: ${typeof message}`);
console.log(`Number: ${number}, type: ${typeof number}`);
console.log(`Check: ${check}, type: ${typeof check}`);
console.log(`X: ${x}, type: ${typeof x}`);

//union type
var y : number | string
y = 10
console.log(`Y: ${y}, type: ${typeof y}`);

y = "hello"
console.log(`Y: ${y}, type: ${typeof y}`);

//y only accepts string and number; booleans cannot be assigned.
// y = true
// console.log(`Y: ${y}, type: ${typeof y}`);


function addNumbers (a: number, b: number) : number {
    return a + b
}

console.log(`addNumbers(5, 4): ${addNumbers(5, 4)}`);

let result = addNumbers(10, 23)
console.log(`result: ${result}`);
