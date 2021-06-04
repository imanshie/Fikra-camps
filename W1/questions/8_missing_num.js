/** Q8
   * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
  
  Examples
  missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
  
  missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
  
  missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
  Notes
  The array of numbers will be unsorted (not in order).
  Only one number will be missing.
   */

  let sortArray = ((arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return(arr)
})

let missingNum = ((arr) => {
    arr = sortArray(arr)
    for(let i=0; i<arr.length;i++)
        if(arr[i] != i+1) 
            return(i+1)
    return(10)
    /*
    for(let i=0; i<arr.length;i++)
        if(arr[i] != arr[i+1]-1) 
            return(arr[i]+1)
    */
})

console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))

