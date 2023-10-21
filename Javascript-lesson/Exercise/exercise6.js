let hour = 18;

if ( hour >= 6 && hour <= 12)
{
    console.log(`Good morning!`);
}
else if ( hour >= 13 && hour <= 17)
{
    console.log(`Good afternoon!`);
}
else {
    console.log(`Good night!`);
}


let hours = 18;

if ( hours >= 6 && hours <= 12)
{
    console.log(`rice chicken!`);
}
else if ( hours >= 13 && hours <= 17)
{
    console.log(`fry rice!`);
}
else {
    console.log(`BBQ!`);
}

const name = `Chantha`;
if ( hour >= 6 && hour <= 12)
{
    console.log(`Good morning ${name}!`);
}
else if ( hour >= 13 && hour <= 17)
{
    console.log(`Good afternoon ${name}!`);
}
else {
    console.log(`Good night ${name}!`);
}


const age = 21;
if (age <= 6 || age >= 65){
    console.log(`Discount`);
}else{
    console.log(`NO discount`);
}


if (age <= 6 || age >= 65){
    console.log(`cant eat much`);
}else{
    console.log(`Full price`);
}


const isHoliday = true;
if ((age <= 6 || age >= 65) && !isHoliday){
    console.log(`Discount`);
}else{
    console.log(`NO discount`);
}


// const randomNumber = Math.random();
// let result ;
//
//
// if (randomNumber < 0.5)
// {
//     result = 'head';
// }
// else {
//     result = 'tail';
// }
// console.log(result);
//
//
// const guess = 'head' ;
// if (result === guess)
// {
//     console.log('You Win!')
// }else{
//     console.log('You Lose!')
// }

const randomNumber =Math.random();
const result = randomNumber <0.5? 'head' : 'tail';
console.log(result);

let guess = 'head';
console.log(guess===result ? 'you win!' : 'you lose');


const cart = 56;
if (cart <= 10){
    console.log(`The items is : ${cart}`);
}else{
    console.log("The Cart is full!")
}


let cartQuantity = 0 ;





