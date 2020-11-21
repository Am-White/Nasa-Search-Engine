
function wikiContent(searchWord){
   
            
    var inputEl = searchWord;
    var wikiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + inputEl;

    $.ajax({
        url: wikiURL,
        method: "GET",

        error: function(){
          
            $('#projectname').text("Wikipedia");
            $('#projectname').next().text("Sorry! There is no information with this searched input!");
        }


    }).then(function(response) {
        console.log("wiki");
        console.log(response);
 
        $('#projectname').text(response.displaytitle);
        $('#projectname').attr("style","font-size:40px");

        $('#projectname').next().text(response.extract);
    });
    $('input[type="text"]').val("");
}
var today = moment().format("YYYY-MM-DD");

var key="puubY5HJoKpmDOhcrRYD9nZIxJ2we1gX9lXjQoRl";

var dayImg = "https://api.nasa.gov/planetary/apod?api_key="+key+"&date=" + today;

$.ajax({
    url: dayImg,
    method: "GET"
}).then(function(response2) {
      
   
    $('#pic-od').find('.card-image').children().attr("src",response2.url);

    $('#pic-od').find('.card-image img').attr("style","height:500px");
    $('#pic-od').find('.card-image').attr("onclick","window.open('"+response2.url+"')");

    $('#pic-od').find('.tile__container').text(response2.title);
    $('#pic-od').find('.tile__container').attr("style","font-size:20px");

    $('#pic-od').find('.tile__container').parent().next().text(response2.explanation);

    $(".card-footer").text(response2.date);

});
