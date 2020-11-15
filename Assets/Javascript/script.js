'use strict';

// I feel that I am mixing something up.  I want to get information from desired API's like the following:
// var search = new XMLHttpRequest();
// search.open('GET', 'https://SomeAPI.com/WhateverIWantForInformation', true);
// search.onload = function (){
//     Some function code here, to get images/information to poulate in "Result Photos" section, right...
// };


// I think Hasan is using Core $.ajax(...); method.  I am struggling with this; and I hope to resolve my thought process tonight; or by Monday 11/14/20, with my Tutor's assistance.  My Ref. Links are: https://learn.jquery.com/ajax/jquery-ajax-methods/; and https://api.jquery.com/jQuery.ajax/ //
var search = new XMLHttpRequest(); // XMLHttpRequest is to much to type, using knwon abbr. "XHR." //

$.ajax({
 
    // Okay, I think this is where I need to put my API, right? //
    url: "https://images-api.nasa.gov/", // Going to test an API here. //
    data: {
        id: row // Check HTML file. //
    },
    type: "GET",
    dataType : "json",
}),

  // Where response passes to function; and my function for the search query should run (if I did it right U+1F4AB, smh)
  .done(function( json ) {
     $( "<h3 class="foundThis">" ).text( json.title ).appendTo( "body" );
     $( "<div class="col-sm bg-warning ml-1 mb-1 d-flex align-items-end  flex-row" style="height:200px">").html( json.html ).appendTo( "body" ); // THIS IS WHY I 'USE STRICT': I believe the double quotes are messing me up. //
  });

  // I need a function just in case whatever is being queried in my search is not found (or my code just doesn't works). // 
  .fail(function( myXHR, status, errorThrown ) {
    alert( "Sorry, my code needs peer review!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
  })
  // I need a function that will tell the user "I found the information you need"; or "I Can't find what you're looking for." aka "My code stinks"- oh, no, lol! //
  .always(function( myXHR, status ) {
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