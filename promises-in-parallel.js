<script>
/*
  TIME LIMIT - 45 mins
  CONDITIONS - "Open book", i.e. you may use google.

  TODO: Complete the function getSum.

  getSum should make 3 parallel calls to requestNumbers and produce an answer
  as follows:

     - If all three requests complete within 50ms, the answer should be
       the total sum of all numbers in all 3 result arrays returned by
       the calls to requestNumbers.

     - If any of the requests takes longer than 50ms to complete,
       the answer should be the sum of all the numbers fetched by the
       first 2 requests to complete.

     - Once you have calculated an answer, call the function submitResult
       passing in your answer.
       -- Example submitResult(answer);
*/

/*
 requestNumbers fetches a random length array of random numbers, asynchronously.
 It returns a promise that resolves with the fetched array.
 It also optionally accepts a callback that will run when the fetch completes.
 You can assume the fetch always completes successfully.

 ** DO NOT MODIFY requestNumbers; it is included only for reference **
*/
var requestNumbers = function(optCallback)
{
  return doNetworkRequest().then(function(data) {
    if(optCallback)
      optCallback(data);
    return Promise.resolve(data);
  });
};

/**
 * Clicking the 'Run' button below will run a suite of tests on this
 * function and output the results on the right side. Feel free to use your
 * browser's dev console to debug runs of your code.
 * Test cases:
 * 1. All requests complete within 50ms
 * 2. Two requests complete within 50ms
 * 3. One requests complete within 50ms
 * 4. All requests complete in over 50ms
 */

var getSum = function(submitResult) {
  // Calculate an answer as specified above.
  var answer = 0;
  var stTime = new Date().getTime();
  var numbOfAnswers = 0;

  window.timeLimit = true;
  var timeOutId = setTimeout(function() {
    window.timeLimit = false;
    //console.log(firstPromise)
    //console.log(secondPromise)
    //console.log(tirdPromise)
  }, 50)


  var firstPromise = requestNumbers();
  firstPromise.then(function(data) {
    var t = new Date().getTime() - stTime

    numbOfAnswers++;

    if(numbOfAnswers < 3 || window.timeLimit) {
      console.log('a1:' + 'Ecountered Time: ' + t.toString() + ":" + window.timeLimit)
      answer += data.reduce(function(sum, value) {
        return sum + value;
      }, 0);
    }


    if(numbOfAnswers == 3) {
      console.log('a:' + 'Ecountered Time: ' + t.toString() + ":" + window.timeLimit)
      clearTimeout(timeOutId)
      submitResult(answer);
    }
  })


  var secondPromise = requestNumbers();
  secondPromise.then(function(data) {
    var t = new Date().getTime() - stTime
    numbOfAnswers++;

    if(numbOfAnswers < 3 || window.timeLimit) {
      console.log('b1:' + 'Ecountered Time: ' + t.toString() + ":" + window.timeLimit)
      answer += data.reduce(function(sum, value) {
        return sum + value;
      }, 0);
    }

    if(numbOfAnswers == 3) {
      console.log('b:' + 'Ecountered Time: ' + t.toString() + ":" + window.timeLimit)
      clearTimeout(timeOutId)
      submitResult(answer);
    }
  })


  var tirdPromise = requestNumbers();
  tirdPromise.then(function(data) {
    var t = new Date().getTime() - stTime
    numbOfAnswers++;

    if(numbOfAnswers < 3 || window.timeLimit) {
      console.log('c1:' + 'Ecountered Time: ' + t.toString() + ":" + window.timeLimit)
      answer += data.reduce(function(sum, value) {
        return sum + value;
      }, 0);

    }



    if(numbOfAnswers == 3) {
      console.log('c:' + 'Ecountered Time: ' + t.toString() + ":" + window.timeLimit)
      clearTimeout(timeOutId)
      submitResult(answer);
    }
  })




  // Once you've calculated an answer, call submitResult passing in your answer.

};

/* DO NOT MODIFY ANYTHING BELOW THIS COMMENT */























</script>
<html>
  <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <style>
      #container{
        font-family:monospace;
        font-weight:bold;
        color: #ffffff;
      }
    </style>
  </head>
  <body style="background-color: 000">
    <div id="container"></div>
  </body>
</html>
<script>
window.GLOBAL_origSetTimeout = window.setTimeout; window.GLOBAL_timeoutlist = []; window.setTimeout = function(func, delay) { var t = GLOBAL_origSetTimeout(func, delay); GLOBAL_timeoutlist.push(t); return t;};
!function(){var t=[{name:"All requests complete within 50ms",rqs:[{data:[1,2,3],timeout:5},{data:[4,5,6],timeout:10},{data:[7,8,9],timeout:15}],correct:45},{name:"Two requests complete within 50ms",rqs:[{data:[1,2,3,4],timeout:5},{data:[5,6,7],timeout:6},{data:[8,9],timeout:60}],correct:28},{name:"Two requests complete within 50ms",rqs:[{data:[1,2,3],timeout:5},{data:[4,5,6],timeout:60},{data:[7,8,12],timeout:50}],correct:33},{name:"Two requests complete within 50ms",rqs:[{data:[1,2,3],timeout:60},{data:[4,5,6],timeout:4},{data:[7,8,9],timeout:50}],correct:39},{name:"One request completes within 50ms",rqs:[{data:[1,2,3],timeout:60},{data:[4,5,6],timeout:70},{data:[7,8,9],timeout:1}],correct:30},{name:"One request completes within 50ms",rqs:[{data:[1,2,3],timeout:60},{data:[4,5,6],timeout:1},{data:[7,8,9],timeout:70}],correct:21},{name:"One request completes within 50ms",rqs:[{data:[1,2,3],timeout:1},{data:[4,5,6],timeout:60},{data:[7,8,9],timeout:70}],correct:21},{name:"All requests complete in over 50ms",rqs:[{data:[1,2,3],timeout:55},{data:[4,5,6],timeout:60},{data:[7,8,9],timeout:65}],correct:21},{name:"All requests complete in over 50ms",rqs:[{data:[1,2,3],timeout:60},{data:[4,5,6],timeout:65},{data:[7,8,11],timeout:55}],correct:32},{name:"All requests complete in over 50ms",rqs:[{data:[1,2,3],timeout:65},{data:[4,5,6],timeout:60},{data:[7,8,9],timeout:55}],correct:39}],e="",i=[],o=0,n=0,a=3,r=0,u=!1,m=function(){var o=[],m=[],c=function(t){t==n?o.indexOf(e)<0&&m.indexOf(e)<0&&o.push(e):(m.indexOf(e)<0&&m.push(e),o.indexOf(e)<0||o.splice(o.indexOf(e),1))},s=function(t){return new Promise(function(o){e=t.name,i=t.rqs,n=t.correct,r=0,a=3,i.forEach(function(t){t.timeout>50&&(a=2)});var m=!1;GLOBAL_timeoutlist.forEach(function(t){clearTimeout(t)}),GLOBAL_timeoutlist=[];var s=getSum(function(t){m=c(t),r>a&&(u=!0),o()});s instanceof Promise&&s.then(function(t){m=c(t),o()})})},d=function(){var e=GLOBAL_origSetTimeout(function(){$("#container").append("<div>Test runs did not complete within the expected time. Check your code--it's likely that submitResult was not called in one or more tests runs.</div>")},1e3);return new Promise(function(i){var o=function(){if(t.length>0){var n=t.shift();s(n).then(function(){o()})}else clearTimeout(e),i()};o()})};d().then(function(){var t="<div>";m.forEach(function(e){t+=e+" - FAILED </br>"}),o.forEach(function(e){t+=e+" - PASSED </br>"}),u&&0===m.length&&(t+="All answers are correct, but the script is waiting longer than necessary. </br>"),t+="</div>",$("#container").html(t)})},c=function(){var t=function(t){return new Promise(function(e){setTimeout(function(){r++,e(t.data)},t.timeout)})},e=i[o],n=t(e);return o++,o=3>o?o:0,n};window.doNetworkRequest=c,m()}();
</script>
