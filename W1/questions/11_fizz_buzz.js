/** Q11
   * Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
  
  Example
  fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
  
  fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
  Notes
  Make sure to return an array.
   */


  let fizzBuzz = ((num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        if ((i+1) % 3 == 0 && (i+1) % 5 == 0) 
            arr[i]="FizzBuzz"
        else if ((i+1) % 3 == 0) 
            arr[i]="Fizz"
        else if ((i+1) % 5 == 0) 
            arr[i]="Buzz"
        else
            arr[i]=i+1
    }
    return(arr)
})

console.log(fizzBuzz(15))


