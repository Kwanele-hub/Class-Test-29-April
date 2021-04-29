var exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));
// ---------------------------

const jj = (num)=>{
    if(num > 10){
        return;
    }
    console.log(num);
    jj(num + 1);
};

jj(1);

// -------------------
const exponential = (e, b) => {
  if (b == 0) return 1
  return e * exponential(e, b - 1)
}

console.log(getFactorial(5))
