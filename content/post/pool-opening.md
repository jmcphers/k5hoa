+++
date = "2018-04-18"
title = "Pool Opening Countdown!"
expirydate = "2018-05-27"
+++

<script type="text/javascript">
var deadline = 'May 26 2018 12:00:00';

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

If you think this Spring has been slightly chillier and wetter than usual, [you'd be right](https://cliffmass.blogspot.com/2018/04/is-this-unusually-poor-spring-in.html). Take heart, however -- summer is just around the corner and the pool will be opening before you know it!

<!--more-->


