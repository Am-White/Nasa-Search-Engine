'use strict';

// I feel that I am mixing something up.  I want to get information from desired API's like the following:
// var request = new urlRequest();
// request.open('GET', 'https://SomeAPI.com/WhateverIWantForInformation', true);
// request.onload = function (){
//     Some function code here, right...
// };


// I think Hasan is using Core $.ajax(...); method.  I am struggling with this; and I hope to resolve my thought process tonight; or by Monday 11/14/20, with my Tutor's assistance.  My Ref. Link is: https://learn.jquery.com/ajax/jquery-ajax-methods/ //
$.ajax({
 
    // 
    url: "post.php",
 
    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
     $( "<h1>" ).text( json.title ).appendTo( "body" );
     $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });


// Hasan's template below. //
// var search = "nebula";
//         var url = "https://en.wikipedia.org/api/rest_v1/page/summary/";

//         $.ajax({
//             url: url + search,
//             method: 'GET',
//             dataType: 'json',


//         }).then(function (response) {
//             console.log(response);
//             console.log(response.extract);
//             console.log(response.thumbnail.source);
//             console.log(response.description);
//         });

// API's to use: 
//     1. https://en.wikipedia.org/api/rest_v1/page/summary/pluto; 
//     2. https://images-api.nasa.gov/search?q=sun
//     3. https://api.le-systeme-solaire.net/en/
// Use these to make results from API's show in "Result Photos" section