
+++
date = "2016-05-16"
title = "Pool Opens May 28!"
+++

<script type="text/javascript">
var deadline = 'May 28 2016 12:00:00 GMT-08:00';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
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
  if (Date.parse(endtime) < Date.parse(new Date())) {
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
    initializeClock('clockdiv', deadline);
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

<div id="clockdiv">
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

The Kingsgate 5 pool is opening soon! Mark your calendars for opening day: **Saturday, May 28, 2016, 12 - 8pm**. 



<!--more-->


