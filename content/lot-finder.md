+++
date = "2019-09-14"
title = "Lot Finder"
+++ 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="../../js/lot-data.js"></script>
<script src="../../js/lot-mailbox.js"></script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRuxGXeFjWJFOrJODq44gDQlLa8bpfp98&callback=init_map"></script>

<div class="alert alert-info">
Enter your house number (without street name) to look up your lot number.
</div>

<!-- Bottom margin is to cover background images -->
<form class="form-horizontal" onsubmit="" style="margin-bottom: 170px;">
<div class="form-group">
    <label class="col-sm-3 control-label" for="house">House #</label> 
    <div class="col-sm-7">
        <input id="house" type="text" style="width: 25%" />
        <select id="street" style="width: 70%; display: none;"></select>
        <input type="button" class="btn btn-default" onclick="return lookupLot('lot');" value="Look up lot #" />
    </div>
</div>
<div class="form-group"> 
    <label class="col-sm-3 control-label" for="lot">Lot #</label>
    <div class="col-sm-7">
        <input class="form-control" readonly type="text" style="width: 25%;" id="lot" />
    </div>
</div>
</form>

