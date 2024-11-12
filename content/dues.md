+++
date = "2016-04-22T20:49:18-07:00"
draft = false
title = "HOA Dues"
weight = 20
menu = "main"
+++

<script src="../js/lot-data.js"></script>

<script>
function checkForm() {
    var el = document.getElementById("os1");
    if (!el.value) {
        alert("You must enter a lot number. If you don't know your lot number, try clicking 'I don't know my lot number' to look it up from your house and street number.");
        return false;
    }
    return true;
}
</script>

The Kingsgate Five HOA dues for 2024 are $553 per year. Payment is due in full by March 31, 2024. You may choose to pay either online or via a mailed check. If you're unsure about the status of your account, [contact the HOA treasurer]({{< relref "contact.md" >}}).

The HOA does not offer refunds; all transactions are final.

## Pay Dues Online

Fill out the form below to pay your dues online with PayPal. A convenience fee of 3.5% has been included in the online rate. If you need to pay a different amount (for instance, if you owe late fees or finance charges, or wish to make a partial payment), you will need to pay by check.

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" onSubmit="return checkForm();" target="_top">

<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="5VBYU8SEZHAFS">
<input type="hidden" name="on0" value="2024 HOA Dues">

<strong>2024 HOA Dues</strong><br>

<select name="os0">
  <option value="Annual">Annual $572.79 USD</option>
  <option value="Late Fee">Late Fee $25.00 USD</option>
</select> 
<br />
<br />

<input type="hidden" name="on1" value="LOT #">
<strong>Lot #</strong> <input type="text" id="os1" name="os1" size="5" maxlength="5"><br />
<small><a id="selectlink" href="javascript:selectLot()">I don't know my lot number</a></small>
<div id="lotfinder" style="margin-top: 10px; display: none;">
<strong>House #</strong> <input id="house" type="text" size="5" maxlength="5">
<select id="street" style="display: none;"></select>
<button class="btn btn-default" onclick="return lookupLot('os1');">Look up lot #</button>
</div>

<br />
<br />
<input type="hidden" name="currency_code" value="USD">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

## Pay Dues via Check

To pay your dues via check, make out a check to **Kingsgate Five Homeowners Assoc.** and mail it to the following address:

<div class="mail">
    Kingsgate V HOA<br />
    PO  Box 1791<br />
    Woodinville, WA 98072-1791<br />
</div>

When making a payment via check, ensure your lot number is visible, preferably written in the check's memo field.

