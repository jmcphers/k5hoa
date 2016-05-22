(function() {

document.addEventListener("DOMContentLoaded", function(evt) {
  // find the background element
  var bg = document.getElementById("background");

  // skip if no element
  if (bg === null)
    return;

  // skip if no images
  if (!header_images)
    return;

  // skip if image already selected
  if (bg.style.backgroundImage.indexOf("url") >= 0) 
    return;

  // select random background
  var idx = Math.floor(header_images.length * Math.random());

  // set as element background
  bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('" + header_images[idx] + "')";
});

})();

