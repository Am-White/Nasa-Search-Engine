
var url = "https://images-api.nasa.gov/search?q=";

$('results grid-r-3 grid-c-8').attr("style","display:none");

function nasaImageSearch() {
    $.ajax({
        url: url + $('input[type="text"]').val(),
        method: 'GET',
        dataType: 'json',
    }).then(function (response) {
        console.log("ress")
        console.log(response);
        
        for (i = 1; i < 11; i++) {
            
            var title = response.collection.items[i].data[0].title;
            var links = response.collection.items[i].links[0].href;
            var description = response.collection.items[i].data[0].description;
            var date = response.collection.items[i].data[0].date_created;
            
            $(`#card-${i}`).find(".tile__title").text(title);
            $(`#card-${i}`).find(".tile__subtitle").text(date.substring(0,10));
            $(`#card-${i}`).find(".card-body content").text(description.substring(0,200).concat("..."));  
            $(`#card-${i}`).find(".card-image").children().attr("src", links);
            $('results grid-r-3 grid-c-8').attr("style","display:block");
        };
    });
};

$('#search-btn').click(function () {
    nasaImageSearch();
    wikiContent($('input[type="text"]').val());
});