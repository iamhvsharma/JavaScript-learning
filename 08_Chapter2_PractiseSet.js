// Practise set for Operators and Conditinals 

// Problem 1 - Use Logical Operators to find whether the age of a person lies between 10 and 20 

let a = 11;

if(a>10 && a<20){
    console.log("Age lies between 10 to 20");
} else{
    console.log("Not a valid age!")
}


// Problem 2 - Demonstrate the use of Switch case statement in JavaScript

let City = "Jaipur"; // Jaipur, Udaipur, Jodhpur, Jaisalmer 

switch(City){
    case 'Jaipur':
        console.log("Pink City");
        break;

    case 'Udaipur':
        console.log("City of Lakes");
        break;

    case 'Jodhpur':
        console.log("Blue City");
        break;

    case 'Jaisalmer':
        console.log("City of Desert");
        break;

    default:
        console.log("Enter valid City name");
}

// Problem 3 - Write a javascript program to find wheather a number is divisible by 2 and 3 

/*
let num = 5;

if(num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3");
} else{
    console.log("Your number is not divisible by 2 and 3");
}

*/



// Problem 4 - Write a JS program to find whether a number is divisible by either 2 or 3

let num= 20;

if(num % 2 == 0 || num % 3 == 0){
    // console.log("Your number is divisible by 2 and 3");
    if(num % 2 == 0){
            console.log("Your number is divisible by 2");

    } else {
            console.log("Your number is divisible by 3");

    }
} else{
    console.log("Your number is not divisible by 2 and 3");
}