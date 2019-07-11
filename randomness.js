function randomNumber(){ 
    const numbers = Math.random();
    console.log(numbers)
    const times21 = numbers * 21 
    console.log(times21)
    const final = Math.floor(times21);
    console.log(final);
}
randomNumber();
function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = Math.random();
    let randomLetters = letters * 26
    let integer = Math.floor(randomLetters)
    Final = alphabet[integer]
    console.log(Final);
}
randomLetter();

function randomFood(array){ 
    const foods = [
         "pizza",
         "burgers",
         "rice and beans",
         "lasagna",
         "macaroni and cheese",
         "baked potatoes"
         ];
    let aFood = Math.random() * foods.length; 
    let final = Math.floor(aFood);
    console.log(foods[final]);
 }      
randomFood();
// GLOBAL VARIABLES //
/////////////////////
 
// 
// const students = [
// "Bob",
// "Martin",
// "Danny",
// "Madhi",
// "Harry",
// "Sean",
// "Robert"
// ];
// //////////////////////////////////
// // END OF GLOBAL VARIABLES //
// /////////////////////////////////
