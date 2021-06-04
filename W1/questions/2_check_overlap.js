 /** Q2
  * assume you have two time periods
  * for example
  * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
  * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
  * write a function that tells us whether two given periods overlap or not
  * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
  * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
  */
 
  class History {
    constructor(str){
        this.day = parseInt(str.slice(0,2))
        this.month = parseInt(str.slice(3,5))
        this.year= parseInt(str.slice(6,10))
        this.hour = parseInt(str.slice(11,13))
        this.min = parseInt(str.slice(14,16))
    }
}

function CheckOverlap(){
    let str = arguments
    let times = []
    for(let i = 0; i < str.length; i++)
        times[i] = new History(str[i])
    
    if(times[1].year >= times[2].year && 
        times[1].month >= times[2].month && 
        times[1].day >= times[2].day && 
        times[1].hour >= times[2].hour && 
        times[1].min >= times[2].min)
        return("overlap")
    else
        return("no") 
        //return("Are you a time traveler, cuz if you are not, plz write a reasonal time")
}


console.log(
  CheckOverlap(
    "19/05/2021 13:00",
    "19/05/2021 17:00",
    "20/05/2021 16:00",
    "20/05/2021 19:00"
  )
);