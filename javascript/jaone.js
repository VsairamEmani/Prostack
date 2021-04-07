let number=6543;
let reversed=0;
let rem=0;
while(number!=0)
{
   /* rem=number%10;
    rev=rev*10+rem;
    number=number/10;
*/
reversed =reversed*10;
  reversed =reversed +number % 10;
  number = number-number % 10;
  number =number/ 10;
 
}
console.log(reversed);