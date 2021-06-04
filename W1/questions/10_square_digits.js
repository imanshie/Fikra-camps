/** Q10
   * Create a function that squares every digit of a number.
  
  Examples
  squareDigits(9119) ➞ 811181
  
  squareDigits(2483) ➞ 416649
  
  squareDigits(3212) ➞ 9414
  Notes
  The function receives an integer and must return an integer.
   */

  let squareDigits = ((num) => {
    let str=num+'', temp = ''
    for(let i=0 ; i<str.length; i++)
        temp += str[i]*str[i]
    return(parseInt(temp))
})


console.log(squareDigits(9119))

