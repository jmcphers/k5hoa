+++
date = "2017-05-27"
title = "Pool Closed Memorial Day Weekend"
+++

<script type="text/javascript">
var deadline = 'May 27 2017 14:00:00';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - (new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  if (Date.parse(endtime) < (new Date())) {
    clock.style.display = "none";
    return;
  }
  clock.style.display = "block";
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds')
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }, 1000);
}

window.addEventListener("load", function() {
   // initializeClock('clockdiv', deadline);
});

</script>


<style>
#clockdiv{
    font-family: sans-serif;
    color: #fff;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 20px;
    display: none;
}

#clockdiv > div{
    padding: 10px;
    border-radius: 3px;
    background: #00BF96;
    display: inline-block;
}

#clockdiv div > span{
    padding: 15px;
    border-radius: 3px;
    background: #00816A;
    display: inline-block;
}

.smalltext{
    padding-top: 5px;
    font-size: 16px;
}
</style>

<div id="clockdiv" style="display: none;">
  <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>

<div class="alert alert-info" style="font-weight: bold; font-size: 120%;" role="alert">
Despite our best efforts our pool chlorinator has broken and after working hard to fix it we cannot.  We will not be able to have it serviced until Tuesday so at this time the pool will be closed for the rest of the weekend. 
</div>

We are very sorry that this has occurred on such a sunny weekend. After re-surfacing the bottom of the pool we were not able to finish it until this past week due to the extremely wet Spring we had; therefore, we were not able to run our equipment until late Thursday night, which left only a day to work out all the issues and balance the water.  We appreciate your understanding. Please check our web site for updates.

-- Cindy Klein and the K5 Staff.

<!--more-->


