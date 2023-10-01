// Loops

// for loop

// for(let i = 0; i <= 20; i++){
//     console.log(i);
// }

// for in loop

let obj ={
    harsh:90,
    mahi:80,
    kriti:83,
    aakrati: 38
}



// for in loop - Used to Iterate Objects
for(let a in obj){
    console.log("Marks of "+ a + " are " + obj[a]);
}



// for of loop - Use to iterate characters of keys in a object
for(let b of "harsh"){
    console.log(b);
}