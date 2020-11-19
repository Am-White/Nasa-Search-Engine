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