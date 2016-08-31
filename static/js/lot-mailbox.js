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

           // submit to server
           var l = lot_data.lots[i];
           $.ajax({
               url:    "http://www.oatmealforbreakfast.com/record-lot.php",
               method: "POST",
               data: {
                 lot:              lot,
                 address:          l.address,
                 city:             l.city,
                 phone:            document.getElementById("phone").value,
                 mailbox:          l.mailbox,
                 lat:              l.lot_location.lat,
                 lng:              l.lot_location.lng,
                 firstname:        document.getElementById("firstname").value,
                 lastname:         document.getElementById("lastname").value,
                 email:            document.getElementById("email").value,
                 mailbox_position: l.position }
           });

           // navigate to header
           window.location.hash = "#map-header";
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

