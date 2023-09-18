//  Trick to learn 7 DataTypes

// nn bb ss u
// nn - number null 
// bb - boolean bigint
// ss - string symbol
// u - undefined 


let a = null; 
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Harsh";
let f = Symbol("I am a Nice Symbol");
let g = undefined;

let h; // This is also a undefined datatype

console.log(a,b,c,d,e,f,g);

console.log("Hi")




// Non Primitive Data Types - Objects in JS

const items = {
    "Harsh": true,
    "Tanishka": true,
    "Gabbu": false,
    "Gappu": false,
    "Love": false


}

console.log(items["Love"]);
