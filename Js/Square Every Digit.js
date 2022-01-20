function squareDigits(num){
  num = num.toString();
  let result ="";
  for (let i=0; i<num.length; i++)
  {
  result += Math.pow(num.charAt(i),2)+"";
  }
  return parseInt(result);

}

Почему?