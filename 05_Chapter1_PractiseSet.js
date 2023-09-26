// Chapter 1 - Practise Set

// Q1 - Create a varible of type string and try to add a number to it
let a = "Harsh";
let b = 6;

console.log(a+b); // When String and Number are added they Concatenate

// Q2 - Use type of Operator to find the datatype of String in last question 

console.log(typeof (a+b));

// Q3 - Create a const object in JavaScript, Can you change it to hold a number later


const Student = {
    name: "Harsh",
    rollNo: 23,
    section : 1
}
console.log(Student);



// Q4 - Try to add a new key to the created Object in problem no 3 were youo able to do that?

Student['friend'] = "Mahendra";
console.log(Student);


// If a Object name is made using const then we can add or change the keys of object.


// Q5 - Write a program to create a word meaning dictionary of 2 Words

const dict = {
    appreciate: "To Recognize full worth of",
    yakka: "Work, especially hard work",
}

console.log(dict['yakka']);