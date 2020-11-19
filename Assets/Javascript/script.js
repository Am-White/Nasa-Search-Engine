'use strict';

var search = "Jupiter";

// Relaxed AJAX //
function nasaImageSearch(search) {
  $.ajax({
    type: "GET",
    url: "https://images-api.nasa.gov/search?q=" + search + "&appid=", // DO I NEED API KEY FOR NASA??? //
    dataType: "JSON",

    success: function (data) {
      console.log (data);
      I NEED HELP GETTING THIS TO GO INTO THE DIFFERENT </div>. We need to change where results populate (only one per area).  Maybe we need to use a ".then" function. //
      $("#search").html("<div class='container-fluid mt-3'>").append("<div class='row'>");

        if (data.list[i].dt_img) {

          // Create HTML elements. // 
          var col = $("<div>").addClass("col-11 bg-success container-primary text-white");
          var body = $("<div>").addClass("col-sm bg-warning ml-1 mb-1 d-flex align-items-end  flex-row" style="height:200px");
          var title = $("<div>").addClass("align-text-bottom").text(new Date(data.list[i].dt_txt).toLocaleDateString());
          // NO, NO, NO! var img = $("<img>").attr("src", "https://images-api.nasa.gov/search?q=" + data.list[i]. + ".png");

          // I need to merge all this together... //
          col.append(card.append(body.append(title)));
          $("#search").append(col);

    }

  });

}

// Event Listener //
$(document).ready(function () {
  // var search = $("btn btn-outline-success my-2 my-sm-0").val;
  nasaImageSearch;
});