'use strict';

var search = "nebula";
        var url = "https://en.wikipedia.org/api/rest_v1/page/summary/";

        $.ajax({
            url: url + search,
            method: 'GET',
            dataType: 'json',


        }).then(function (response) {
            console.log(response);
            console.log(response.extract);
            console.log(response.thumbnail.source);
            console.log(response.description);
        });

// API's to use: 
//     1. https://en.wikipedia.org/api/rest_v1/page/summary/pluto; 
//     2. https://images-api.nasa.gov/search?q=sun
//     3. https://api.le-systeme-solaire.net/en/
// Use these to make results from API's show in "Result Photos" section