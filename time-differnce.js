
//
// var date1 = new Date("08/06/2015 09:10-10:00");
// var date2 = new Date("08/06/2015 24:00");
//
// var diff = date2 - date1
//
// console.log(date1 )
//
// var msec = diff;
// var hh = Math.floor(msec / 1000 / 60 / 60);
// msec -= hh * 1000 * 60 * 60;
// var mm = Math.floor(msec / 1000 / 60);
// msec -= mm * 1000 * 60;
// var ss = Math.floor(msec / 1000);
// msec -= ss * 1000;
//
// console.log(hh + ":" + mm + ":" + ss)
//

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    var C = S + "\nSun 24:00-24:00"
    var s = C.replace(new RegExp("Sat", 'g'), '07/07/2018' )
    .replace(new RegExp("Sun", 'g'), '07/08/2018' )
    .replace(new RegExp("Mon", 'g'), '07/02/2018' )
    .replace(new RegExp("Tue", 'g'), '07/03/2018' )
    .replace(new RegExp("Wed", 'g'), '07/04/2018' )
    .replace(new RegExp("Thu", 'g'), '07/05/2018' )
    .replace(new RegExp("Fri", 'g'), '07/06/2018' )
    console.log(s.split("\n").sort())
    var arr = s.split("\n").sort().join(' ').split('-').join(' ').split(' ')
    var maxTime = 0;
    console.log(arr)
    for(let i =0 ; i < arr.length; i =i+3){
      if(arr[i+4]){
        //console.log(arr[i] +' ' + arr[i+2])
        var timeEnd = new Date(arr[i] +' ' + arr[i+2])
        //console.log(arr[i+3] +' ' + arr[i+4])
        var timeStart= new Date(arr[i+3] +' ' + arr[i+4])

        console.log(timeStart)
        console.log(timeEnd)

        var dif = timeStart.getTime()  - timeEnd.getTime()
      console.log(dif/1000/60)
        if(maxTime < (timeStart - timeEnd)){
          maxTime = timeStart -timeEnd
        }
      }
    }

    diff = maxTime/1000/60
    return Math.abs(Math.round(diff))
    //return arr
}

var S = 'Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00'

S ='Mon 01:00-23:00\nTue 01:00-23:00\nWed 01:00-23:00\nThu 01:00-23:00\nFri 01:00-23:00\nSat 01:00-23:00\nSun 01:00-21:00'




console.log(solution(S))
