console.log("exercice 3");

$(document).ready(function() {
    $('h1').text('Despert Dimitri');
    $('#tagline').text('Je suis une banane flambée, vanille - caramel');
    $('.navbar-nav').not('.navbar-right').remove();
    $('.glyphicon-log-in').addClass('glyphicon-user').removeClass('glyphicon-log-in');
    $('footer > p').text('Copyright 2017').css("font-weight","Bold");
    $('.bg-3 > .row > div > p, .bg-3 > .row > div > p').text(function(index){return"Mon projet " + (index +1)});
    $('.bg-3 > .row > div > img, .bg-3 > .row > div > img').attr('src', "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-Jungle-Image.jpg&f=1&nofb=1");
    $('h3').after('<div class="row">\
        <div class="col-md-12">\
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Lbhqjd0PzPGQGwG84D6jNwHaEo%26pid%3DApi&f=1" height="250">\
        <p>Ceci est mon dernier projet trop cool tavu</p>\
        \</div>\
        \</div>');
    $('footer').addClass('intro');
})
