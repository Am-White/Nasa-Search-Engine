
var url = "https://images-api.nasa.gov/search?q=";

$('div[class="results grid-r-3 grid-c-8"]').attr("style", "display:none");


var noResult = false;



function nasaImageSearch() {
    $.ajax({
        url: url + $('input[type="text"]').val(),
        method: 'GET',
        dataType: 'json',

        error: function(){
          
            $(`#card-${i}`).find(".tile__title").text("Sorry! There is no information with this reseached input!");
            $(`#card-${i}`).find(".tile__subtitle").text("");
            $(`#card-${i}`).find(".card-image").children().attr("src", "");
        }

    }).then(function (response) {

        if (!response.collection.metadata.total_hits == 0) {
         
            wikiContent($('input[type="text"]').val());

            $('div[class="results grid-r-3 grid-c-8"]').attr("style", "display:block");

            
            $('.wall').empty();
            $('.wall').hide();
             noResult = false;

            console.log("responseeeeee");
            console.log(response);

            for (i = 1; i < 11; i++) {

                var title = response.collection.items[i].data[0].title;
                var links = response.collection.items[i].links[0].href;
                var date = response.collection.items[i].data[0].date_created;
                
                $(`#card-${i}`).find(".tile__title").text(title.substring(0, 55));
               
                $(`#card-${i}`).find(".tile__subtitle").text(date.substring(0, 10));

                $(`#card-${i}`).find(".card-image").children().attr("src", links);
            }
        }

        else {
            $('div[class="results grid-r-3 grid-c-8"]').attr("style", "display:none");
            
            if (!noResult) {
                
                $('.welcome').append('<div  class="wall"></div>');
                $('.wall').append('<div  class="no-results grid-c-8 grid-r-3"><h1><b>No Results Found!</b></h1></div>');

                $('.no-results h1').attr("style", "color:rgb(110, 8, 8)");
                $('.no-results').attr("style", "padding:20px;margin-top:15px");
                
                noResult = true;
            }
        }
    })
}

$('#search-btn').click(function () {

    nasaImageSearch();
   
});
