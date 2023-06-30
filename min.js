//    Write a JavaScript program to find the factorial of a number.
var fact = 1,n;
n=prompt("Enter any value");
while(n>=1)
{
    fact=fact*n;
    n=n-1;
}
alert("Factorial of given number is" + fact);
document.write(fact);
