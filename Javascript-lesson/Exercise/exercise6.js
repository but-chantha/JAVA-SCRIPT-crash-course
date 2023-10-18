
let time;
let hour = 17;

if (hour => 6 && hour <= 12)
{
    time = `Good morning!`;
}
else if (hour => 13 && hour <= 17)
{
    time = `Good afternoon!`;
}
else {
    time = `Good night!`;
}

console.log(time);