


let num=17;
let count=0;
for(let i=1;i<=num;i++)
  {
    if(num%i===0)
    {
      count++;
      
    }
  }
if(count===2)
{
  console.log("No is Prime")
}else{
  console.log("No is not Prime")
}