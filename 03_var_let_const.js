console.log("Let's understand difference between var, let and const");

var a = 45;
var b = "Harsh";
var c = null;
var d = undefined;
let e = "Tanishka"

// var is globally scoped while let and const are block scoped

{
    var b = "Harshit Sharma";
    console.log(b);
}

console.log(b);

// Output - Harshit Sharma 
// Harshit Sharma

// Because the var is globally scoped it can be changed from anywhere 


{
    let e = "Harsh";
     console.log(e);
}

console.log(e);

// Output - Block code - Harsh
// Outside console.log will give Tanishka

// Because let is Block Scoped so the changes remains inside the Block


// var can be updated and redeclared within its scope

// But let cannot be updated and redeclared so we should use let or const

// Const can neither be updated nor redeclared 

