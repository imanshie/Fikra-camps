/** Q16
   * Create a function that takes an array of numbers and returns the second largest number.
  
  Examples
  secondLargest([10, 40, 30, 20, 50]) ➞ 40
  
  secondLargest([25, 143, 89, 13, 105]) ➞ 105
  
  secondLargest([54, 23, 11, 17, 10]) ➞ 23
  Notes
  There will be at least two numbers in the array.
   */

  let max = ((arr) => {
    let max = arr[0]
    for(let i=0; i<arr.length; i++)
        if(arr[i]>max)
            max=arr[i]
    return(max)
});

let secondLargest = ((arr) => {
    let first = max(arr), second = arr[0], i = 0;
    while(second == first){
        second = arr[i+1]
        i++
    }
    for(let i=0; i<arr.length; i++)
        if(arr[i]<first && arr[i]>second)
            second=arr[i]
    return second
});

console.log(secondLargest([90, 89, 17, 10]))