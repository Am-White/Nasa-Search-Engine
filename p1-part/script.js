// $("#send").on("click", function(event) {
//     event.preventDefault();

//     var inputEl = $("#newInput").val();
//     var wikiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + inputEl;

//     $.ajax({
//         url: wikiURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);

//         var description = $("<p>").text(response.extract);
//         $("#content").empty();
//         $("#content").append(description);
//     });

//     var dayImg = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

//     $.ajax({
//         url: dayImg,
//         method: "GET"
//     }).then(function(response2) {
//         console.log(response2);

//         $("#dayPic").empty();
//         $("#dayPic").attr("src", response2.url);
//     });

// });