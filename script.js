let add7 = (x) => x+7;
let multiply = (x, y) => x*y;
let capitalize = function(stringToCap){
    console.log(stringToCap.toLowerCase().charAt(0).toUpperCase());
    console.log(`${stringToCap.charAt(0).toUpperCase()}${stringToCap.slice(1).toLowerCase()}`);
};

let lastLetter = (x) => x.slice(-1);

console.log(multiply(7,3));
console.log(add7(7));
capitalize("abcd");
capitalize("ABCD");
capitalize("aBcD");
console.log(lastLetter("abcdefg"));