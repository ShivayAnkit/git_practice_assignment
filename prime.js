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

checkPrime(9);