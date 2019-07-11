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
    let letters = ["A","B","C","D","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   let randomLetters = letters.random(); 
    console.log(randomLetters)
}
randomLetter();
// GLOBAL VARIABLES //
/////////////////////
// const alphabet = "abcdefghijklmnopqrstuvwxyz"
// const foods = [
// "pizza",
// "burgers",
// "rice and beans",
// "lasagna",
// "macaroni and cheese",
// "baked potatoes"
// ];
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
