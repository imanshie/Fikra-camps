/** Q9
   * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
  
  Examples
  numToEng(0) ➞ "zero"
  
  numToEng(18) ➞ "eighteen"
  
  numToEng(126) ➞ "one hundred twenty six"
  
  numToEng(909) ➞ "nine hundred nine"
  Notes
  There are no hyphens used (e.g. "thirty five" not "thirty-five").
  The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
   */

  let numbers = {
    ones:['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight','nine'],
    teens:['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'],
    tens:[ '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundreds:['','one hundred', `two hundred`, `three hundred`, 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'], 
}

let numToEng = ((num) => {
    num = num+''
    if(num == 0)
        return 'zero'
    else if(num.length==1){
        return numbers['ones'][num]
    }else if(num.length==2 && num >= 11 && num  <= 19){
        return numbers['teens'][num[1]]
    }else if(num.length>2 && parseInt(num.slice(1,3)) >= 11 && parseInt(num.slice(1,3))  <= 19){
        return ` ${numbers['hundreds'][num[0]]} ${numbers['teens'][num[2]]}`
    }else{
        return ` ${numbers['hundreds'][num[0]]} ${numbers['teens'][num[1]] } ${numbers['ones'][num[2]]}`
    }
})
console.log(numToEng(112))