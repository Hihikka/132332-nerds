var link = document.querySelector(".contact-us");

var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!email.value || !text.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("contact-us", login.value);
  }
});


function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9387942,30.3208893)
}
  var map = new google.maps.Map(document.getElementById("canvas-map"),
                                mapOptions);
  var image = "img/nerdsmap.png";
  var myLatLng = new google.maps.LatLng(59.9387942,30.3236893);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
});
}

google.maps.event.addDomListener(window, 'load', initialize);

