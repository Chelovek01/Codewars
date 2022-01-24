//--------------------------------------------------Task----------------------------------------------------------------
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
///------------------------------------------------Solution-------------------------------------------------------------

function getMiddle(s)
{
  let result = ''
  let len = s.length
  if(len % 2 == 0){
    return result += (s[(len / 2) - 1] + s[(len / 2)]);
  }else return result += (s[Math.ceil((len / 2) - 1)])
}