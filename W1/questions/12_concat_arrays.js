/** Q12
   * Create a function that concatenates n input arrays, where n is variable.
  
  Examples
  concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
  
  concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
  
  concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
  
  concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
  Notes
  Arrays should be concatenated in order of the arguments.
   */

  let concat = ((...arrs) => {
    let arr = []
    for(let i=0; i<arrs.length; i++)
        arr.push(...arrs[i]) 
    return(arr)
    
});


console.log(concat([1], [2], [3], [4], [5], [6], [7]))