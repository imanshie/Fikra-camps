/** Q5
  * Write a binary search function
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


let BinarySearch = ((elem, arr) => {
  arr = sortArray(arr)
  let start=0, end=arr.length-1;
  while(start<=end){
      let mid = Math.floor(start + end/2)
      if(arr[mid]==elem)
          return `Found in index ${mid}`
      else if(arr[mid]>elem)
          end = mid - 1
      else
          end = mid + 1
  }
  return 'Not found'
})
 
console.log(BinarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
console.log(BinarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));