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
    ones:['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight','nine'],
    teens:['', 'eleven', 'twilve', 'thriteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eightteen','nineteen'],
    tens:[ '', 'ten', 'tweny', 'thirty', 'fourty', 'fivety', 'sixty', 'seventy', 'eighty', 'ninty'],
    hundred:['','one hundred', `two hundred`, `three hundred`, 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
   
}

let ones = ((num) =>{
    return numbers['ones'][num]
})

let tens = ((num) => {
    if(num >= 11 && num <= 19)
        return numbers['teens'][num[0]]
    else
        return numbers['tens'][num[0]]

})

let hundreds = (() =>{
    return numbers['hundreds'][num[2]]
})


let numToEng = ((num) => {
    num = num+''
    let str = ''
    let arr = [ones, tens, hundreds]

    switch(num.length){
        case 1:
            return arr[0](num)
        case 2:
            return arr[1](num) + '' + arr[0](num)
        case 3:
            for(let i=0; i<num.length; i++)
                str += ` ${arr[i](num)}`
            return str
    } 
})

console.log(numToEng(20))