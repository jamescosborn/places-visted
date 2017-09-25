
function Place (location, landmarks, date, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

Place.prototype.locationDate = function() {
  return this.location + " " + this.date;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedDate, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.locationDate() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");
    $(".place").last().click(function() {

    $("#show-place").show();
    $("#show-place h2").text(newPlace.location);
    $(".location").text(newPlace.location);
    $(".landmarks").text(newPlace.landmarks);
    $(".date").text(newPlace.date);
    $(".notes").text(newPlace.notes);
  });
  });
});
