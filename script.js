// Ex 1 :
const input = [1, 2, 3];

// Way 1: Using "for" Loop (The Manual Way) : 
function solveWithFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(2, arr[i]));
    }
    return result;
}
console.log("For Result:", solveWithFor(input));


// Way 2: Using "forEach" :
function solveWithForEach(arr) {
    let result = [];
    arr.forEach(num => {
        result.push(Math.pow(2, num));
    });
    return result;
}
console.log("ForEach Result:", solveWithForEach(input));


// Way 3: Using "map" :
function solveWithMap(arr) {
    return arr.map(num => Math.pow(2, num));
}
console.log("Map Result:", solveWithMap(input));



// Ex 2 :
function checkEvenOdd(arr) {
    return arr.map(element => {
        if (typeof element !== 'number') {
            return "N/A";
        }
        if (element % 2 === 0) {
                return "even";
        }
        return "odd";
        });
}


// Ex3 :
const names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

console.log("Ex3 Result:");

names.forEach(name => {
    console.log(name);
});

