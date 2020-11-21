//   localStorage.clear();

var favPhotos = ["./nasaPhotos/Solar_eclipse.jpg","./nasaPhotos/andromeda_galaxy.jpg",
"./nasaPhotos/thebubble_Nebula.jpg","./nasaPhotos/Black_hole_friday.jpg",
"./nasaPhotos/earth_and_moon.jpg","./nasaPhotos/the_whirlpool_galaxy.jpg",
"./nasaPhotos/starFormation.jpg","./nasaPhotos/magnetic_monster.jpg",
"./nasaPhotos/butters_on_mars.jpg"];



var lastfavPhotos = favPhotos;

if (!localStorage.getItem("lastFavPhotos")) {

    localStorage.setItem("lastFavPhotos", JSON.stringify(favPhotos));
}

lastFavPhotos = JSON.parse(localStorage.getItem("lastFavPhotos"));


$('.fa-heart').click(function (e) {
    e.preventDefault()

var favImage=$(this).parent().parent().prev().prev().prev().children().find('img').attr('src');



    if (!lastFavPhotos.includes(favImage)) {
    lastFavPhotos.splice(lastFavPhotos.length - 1, 1);
    
    lastFavPhotos.splice(0, 0, (favImage));
    localStorage.setItem("lastFavPhotos", JSON.stringify(lastFavPhotos));

    }
    
      displayFavPhotos();

});


 displayFavPhotos();

function displayFavPhotos() {
    for (i = 1; i <= lastFavPhotos.length; i++) {

        $("#fav-" + i).find("img").attr("src", lastFavPhotos[i - 1]);
       
        $("#fav-" + i).find("a").attr("onclick","window.open('"+lastFavPhotos[i - 1].replace("thumb", "orig")+"')");

    }

}


$("#search-btn").click(function() {
   
    $('html, body').animate({
        scrollTop: $("#search-btn").offset().top
    }, 1500);
});