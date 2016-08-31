+++
date = "2016-08-28"
title = "Mailbox Finder"
+++ 

New locking boxes are coming to Kingsgate 5! Register to receive your mailbox keys, and see where your new mailbox will be located.

<!--more-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="../../js/lot-data.js"></script>
<script src="../../js/lot-mailbox.js"></script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRuxGXeFjWJFOrJODq44gDQlLa8bpfp98&callback=init_map"></script>

<div class="alert alert-info">
Fill out this form to view your mailbox location. This information will be used <strong>only</strong> for communications from the HOA.
</div>

<form class="form-horizontal" onsubmit="return lookup_lot();">
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="firstname">First Name</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" id="firstname" required="true" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lastname">Last Name</label>
    <div class="col-sm-7">
        <input class="form-control" type="text" id="lastname" required="true" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="phone">Phone #</label>
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
        <input type="button" class="btn btn-default" onclick="return lookupLot('lot');" value="Look up lot #" />
    </div>
</div>
<div class="form-group" id="find-mailbox"> 
    <div class="col-sm-7 col-md-offset-3">
        <input type="submit" class="btn btn-primary" value="Find Mailbox" />
    </div>
</div>
</form>
<h3 id="map-header">Mailbox Map</h3>
<div id="mailbox-alert" class="alert alert-success" style="display: none;">
This map shows the location of the locking mailbox (marked with M) for lot <strong id="lot-number"></strong> (marked with L). This is a <span id="mailbox-type"> mailbox</span>. <span id="lot-position" style="display: none;">Your mailbox number in the unit is #<strong id="lot-position-number"></strong>.</span>
</div>
<div id="mailbox-map" style="height: 500px; width: 100%; margin-top: 10px;"></div>

