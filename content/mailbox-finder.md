+++
date = "2016-08-28"
draft = true
title = "Mailbox Finder"
+++ 

New locking boxes are coming to Kingsgate 5! Register to receive your mailbox keys, and see where your new mailbox will be located.

<!--more-->

<script src="../../js/lot-data.js"></script>

<script type="text/javascript">
var map;
var markers = [];
function init_map() {
   map = new google.maps.Map(document.getElementById('mailbox-map'), {
     zoom: 15,
     center: { lat: 47.73226, lng: -122.16919 }
   });
}

function lookup_lot() {
   var lot = document.getElementById('lot').value;
   var found = false;
   for (var i = 0; i < lot_data.lots.length; i++) {
     if (lot_data.lots[i].lot === lot) {
       new google.maps.Marker({
         position: lot_data.lots[i].lot_location,
         map:      map,
         label:    "Lot " + lot,
         title:    "Lot " + lot + " - " + lot_data.lots[i].address
       });
       for (var j = 0; j < lot_data.boxes.length; j++) {
         if (lot_data.boxes[j].id === lot_data.lots[i].mailbox) {
           found = true;
           new google.maps.Marker({
             position: lot_data.boxes[j].location,
             map:      map,
             label:    "Mailbox #" + lot_data.boxes[j].id,
             title:    "Mailbox #" + lot_data.boxes[j].id + 
                       " (" + lot_data.boxes[j].description + ")"
           });
           map.setZoom(18);
           var l1 = lot_data.boxes[j].location;
           var l2 = lot_data.lots[i].lot_location;
           map.setCenter({ lat: (l1.lat + l2.lat) / 2,
                           lng: (l1.lng + l2.lng) / 2});
           document.getElementById("mailbox-alert").style.display = "block";
           document.getElementById("lot-number").innerText = lot;
           document.getElementById("mailbox-type").innerText = lot_data.boxes[j].description;
           if (lot_data.lots[i].position) {
             document.getElementById("lot-position").style.display = "inline";
             document.getElementById("lot-position-number").innerText = lot_data.lots[i].position;
           }
           document.getElementById("find-mailbox").style.display = "none";
           break;
         }
       }
       break;
     }
   }
   if (!found) {
     alert("No mailbox found for lot '" + lot + "'. Double-check your lot " +
           "number and try again.");
   }
   return false;
}
</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRuxGXeFjWJFOrJODq44gDQlLa8bpfp98&callback=init_map"></script>

<div class="alert alert-info">
Fill out this form to view your mailbox location. This information will be used <strong>only</strong> to communicate with you about the locking mailboxes. 
</div>

<form class="form-horizontal" onsubmit="return lookup_lot();">
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lot">First Name</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" id="first_name" required="true" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lot">Last Name</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" id="last_name" required="true" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lot">Phone #</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" id="phone" required="true" style="width: 75%" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lot">E-mail</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" id="email" required="true" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lot">Lot #</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" style="width: 25%;" id="lot" />
        <small><a id="selectlink" href="javascript:selectLot()">I don't know my lot number</a></small>
    </div>
</div>
<div class="form-group" id="lotfinder" style="display: none;">
    <label class="col-sm-3 control-label" for="house">House #</label> 
    <div class="col-sm-7">
        <input id="house" type="text" style="width: 25%" />
        <select id="street" style="width: 70%; display: none;"></select>
        <button class="btn btn-default" onclick="return lookupLot('lot');">Look up lot #</button>
    </div>
</div>
<div class="form-group" id="find-mailbox"> 
    <div class="col-sm-7 col-md-offset-3">
        <input type="submit" class="btn btn-primary" value="Find Mailbox" />
    </div>
</div>
</form>
<h3>Mailbox Map</h3>
<div id="mailbox-alert" class="alert alert-success" style="display: none;">
This map shows the location of the locking mailbox (marked with M) for lot <strong id="lot-number"></strong> (marked with L). This is a <span id="mailbox-type"> mailbox</span>. <span id="lot-position" style="display: none;">Your mailbox number in the unit is #<strong id="lot-position-number"></strong>.</span>
</div>
<div id="mailbox-map" style="height: 500px; width: 100%; margin-top: 10px;"></div>

