/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */


function BestProfit(arr) {
    days = ['Saturday', 'Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday']
    let max = 0;
    let buy_day = 0
    let sell_day = 0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let temp = arr[j]-arr[i]
            if (temp>max) {
                buy_day=i
                sell_day=j
                max = temp
            }
        } 
    }
    return('buy at '+ days[buy_day] +' and sell at ' + days[sell_day])
}

 console.log(BestProfit([150, 146, 142, 143, 145, 144]));