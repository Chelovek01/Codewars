//--------------------------------------------------Task----------------------------------------------------------------
// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).
///------------------------------------------------Solution-------------------------------------------------------------

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(fuelLeft * mpg >= distanceToPump){
    return true;
  } else return false
};