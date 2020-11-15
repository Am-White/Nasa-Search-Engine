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