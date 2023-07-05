// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(example);
let example = "I'm the example!";
//AFTER HOISTING BY INTERPRETER
//let example;
//console.log(example) // 

//1
console.log(hello);                                   
var hello = 'world';                                 

/*
AFTER HOISTING

var hello;
console.log(hello); undefined
hello = 'world';

OUTPUT
------
undefined
------
*/

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*
AFTER HOISTING
var needle;
function test(){
    var needle;
    needle = 'magnet'
    console.log(needle); logs magnet if function is called
}
needle = 'haystack';
test(); --> outputs magnet once

OUTPUT
------
magnet
------
*/

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*
AFTER HOISTING
var brendan
function print(){
    brendan = 'only okay';
    console.log(brendan) --> logs 'only okay' if print() is called
}
brendan = 'super cool';
console.log(brendan); --> outputs 'super cool'

OUTPUT
------
super cool
------
*/

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*
AFTER HOISTING
var food
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); --> logs 'half-chicken' if function is called
    food = 'gone';
}
food = 'chicken';
console.log(food); --> outputs 'chicken'
eat(); --> outputs 'half-chicken'

OUTPUT
------
chicken
half-chicken
------
*/

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*
AFTER HOISTING
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = 'chicken';
    console.log(food); --> chicken
    food = 'fish';
    console.log(food); --> fish
}
console.log(food);

OUTPUT
------
TypeError: mean is not a function --> because after hoisting the variables to the top, the function is trying to be called before it is defined yet
------
*/

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
AFTER HOISTING
var genre;
function rewind(){
    var genre;
    genre = 'rock';
    console.log(genre); --> rock
    genre = 'r&b';
    console.log(genre); --> r&b
}
console.log(genre); -->output undefined
genre = 'disco';
rewind(); --> outputs rock then r&b
console.log(genre); outputs disco

OUTPUT
------
undefined
rock
r&b
disco
------
*/

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
AFTER HOISTING
function learn(){
    var dojo;
    dojo = 'seattle';
    console.log(dojo); --> seattle
    dojo = 'burbank';
    console.log(dojo); --> burbank
}
dojo = 'san jose';
console.log(dojo); --> outputs san jose
learn(); --> outputs seattle then burbank
console.log(dojo); --> san jose

OUTPUT
------
san jose
seattle
burbank
san jose
------
*/

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/*
AFTER HOISTING
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0){
        dojo = "closed for now"; --> syntaxerror ? trying to assign dojo a variable but dojo is a const and cannot be changed
    }
    return dojo
}
console.log(makeDojo("Chicago", 65))
console.log(makeDojo("Berkeley", 0))

OUTPUT
------
SyntaxError/TypeError: Cannot assign value to constant variable
------
*/