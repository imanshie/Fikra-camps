/** Q4
  *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
  *    letterCount('abcac') => {a: 2, b: 1, c: 2}
  */
 
 function isExist(letter, data){
    for(let key of Object.keys(data))
        if(key == letter)
            return true
    return false
 }

function HowManyLetters(word){
    let results = {}
    for (let i = 0; i < word.length; i++)
        results[word[i]] = isExist(word[i], results)? results[word[i]] + 1 : 1
    return(results)
}

console.log(HowManyLetters("kkssffoos"));