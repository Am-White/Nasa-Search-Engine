<<<<<<< HEAD
$("#send").on("click", function(event) {
            event.preventDefault();

            var inputEl = $("#newInput").val();
            var wikiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + inputEl;

            $.ajax({
                url: wikiURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);

                var description = $("<p>").text(response.extract);
                description.addClass("scroll-box");
                $("#content").empty();
                $("#content").append(description);
            });
        });

        var today = moment().format("YYYY-MM-DD");
        var dayImg = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + today;

        $.ajax({
            url: dayImg,
            method: "GET"
        }).then(function(response2) {
            console.log(response2);

            $("#dayPic").empty();
            $("#dayPic").attr("src", response2.url);
            var date = $("<p>").text(response2.date);
            $("#date").append(date);
            // $(".card-footer").text(response2.date);
            $('#pic-od').find('.card-image').attr("onclick","window.open('"+response2.url+"')");
        });
=======

function wikiContent(searchWord){
   
            
    var inputEl = searchWord;
    var wikiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + inputEl;

    $.ajax({
        url: wikiURL,
        method: "GET"
    }).then(function(response) {
        console.log("wiki");
        console.log(response);
 
        $('#projectname').text(response.displaytitle);
        $('#projectname').next().text(response.extract);
    });

}
var today = moment().format("YYYY-MM-DD");

var key="puubY5HJoKpmDOhcrRYD9nZIxJ2we1gX9lXjQoRl";

var dayImg = "https://api.nasa.gov/planetary/apod?api_key="+key+"&date=" + today;

$.ajax({
    url: dayImg,
    method: "GET"
}).then(function(response2) {
    console.log(response2);
   
    $('#pic-od').find('.card-image').attr("style","background-image: url("+response2.url+")");
 
    $('#pic-od').find('.card-image').attr("onclick","window.open('"+response2.url+"')");

    $('#pic-od').find('.tile__container').text(response2.title);
    $('#pic-od').find('.tile__container').parent().next().text(response2.explanation);

    $(".card-footer").text(response2.date);

});
>>>>>>> 84d5ec94e033fe50272d10a0c5407fad5647270b
