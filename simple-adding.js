// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. 
// For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
// For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num) {

    var d = 0
    for (let x = 1; x <= num; x++) {
        d += x;
    }
    return d;
}

console.log(SimpleAdding(12)) // 78
console.log(SimpleAdding(140)) // 9870
