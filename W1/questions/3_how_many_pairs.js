/** Q3
  * assume you have a shoes factory and the production lines produces shoes as follows
  * L R LL R R RR LL
  * write a function that takes these shoes as in a string
  * shoes = "RLRLRRLL"
  * then return how many pairs in it
  * result = 4
  * example HowManyPairs("RLRLRRLL") => 4
  * example HowManyPairs("RRLLRRRLLR") => 2
  */
 
 function countPairs(str){
    mid = str.length/2
    for(let i=0;i<mid;i++)
        if(str[i]==str[str.length-i-1])
            return(0)
    return(mid)
}

function HowManyPairs(str){
    let start=0, count=1, end=0, i=0,pairs=0;
    while(end<=str.length-1){
        if(str[i]==str[i+1]){
            count+=1;
            i+=1
        }
        else{
            start=end
            end=end+count*2
            pairs += countPairs(str.slice(start,end))
            count=1
            i=end
        }
    }
    return(pairs)
}

 console.log(HowManyPairs("RRLLRRRLLR"));