//program to find check prime number
let count = 0;
function checkPrime(num)
{
for(let i = 1; i < num; i++)
{
    if(num % i == 0)
    {
        count++;
    }
}
if(count >= 1)
{
    console.log("Not Prime");
}
else
{
    console.log("prime");
}
}
checkPrime(9);