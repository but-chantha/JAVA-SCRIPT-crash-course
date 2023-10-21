console.log( 3 < 5 );

console.log(5.00 === 5);

if (!true) {
    console.log('else');
} else {
    console.log("hello");
}

const age =15;

if (age >= 16){
    console.log('You can drive');
    console.log('congratulation');
}else if (age >= 14 ){
    console.log('Almost there!');
}else{
    console.log('You can not drive');
}

// both sides must correct to achieve the true boolean
console.log(true && true);
console.log(0.2 >= 0 && 0.2 < 1/3 );
console.log(false && true);
console.log(0.2 >- 0 && 0.2 < 1/3 )


//both or one side true are true
console.log(true || true);
console.log(0.2 >= 0 && 0.2 < 1/3 );
console.log(false || true);
console.log(0.2 >- 0 || 0.2 < 1/3 );



// Truthy Value

const cartQuantity = 5;

if ( cartQuantity)
{
    console.log(`cart has products`)
}

//different from zero or not zero is something that has value
console.log(!0);



// Falsy Value has 0,``,NaN, undefined,NuLL
if (0)// 0
{
    console.log('Truthy');
}
if (``)// empty string ` `
{
    console.log('Truthy');
}
if (`text`/5)//can't identify (NaN)
{
    console.log('Truthy');
}
let variable;//didnt give value yet or dont have value;
// console.log(variable);(Undefined)
if (variable)
{
    console.log(`truthy`);
}
//



//shortcut for if statement
// Ternary Operator

const  result = !true ? `falsy` : `truthy`;
console.log(result);
const result1 = false? ` truthy ` : `falsy`;
console.log(result1);


let result2;
if (3) {
    result2 = `falsy`;
} else {
    result2 = `truthy`;
}
console.log(result2);

//  true && console.log(`hello`);

const message = true && `hello`;
console.log(message);

let message1 = 5;
if (true){
    message1 = `hello`;
}
console.log(message1);


// OR Operator ||
const currency = 'EUR' || `USD` ;
console.log(currency);


