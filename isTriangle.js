function isTriangle(a,b,c)
{
  var firstSide = a + b;
  var secondSide = a + c;
  var thirdSide = b + c;
  if(firstSide > c){
    if(secondSide > b){
      if(thirdSide > a) {
        return true;
      }
    }
  }
   return false;
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));