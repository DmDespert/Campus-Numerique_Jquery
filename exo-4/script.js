console.log("exercice 4");

/*
maintenant, traquer si un utilisateur est en train de remplir le champ pour la newsletter. Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans ?;
Bonus ++ : récupérer le nombre de produits que l'utilisateur a achetés. Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)' puisque l'offre correspond à 25 ipads...
 */

$(document).ready(function() {
    $('.form-inline > button').click(function(){
        if ($('.form-control').val().length == 0) {
            alert("Veuillez indiquer votre email");
        }
        else {
            let mail = $('input').val();
            alert("Merci, adresse " + mail + " enregistrée. Nous vous tiendrons informé des différentes offres");
        }
    });
    $('#myNavbar>ul:first>li:last>a').on('dblclick', function() {$(this).css("display","none")});
    counter = 0;
    $('.img-responsive').click(function() {
        counter++;
        $('.navbar-right>li:last>a').text(function(){return 'Cart (' + counter + ')'});
    });
    $('.img-responsive').on('mouseover', function() {
        console.log("L'utilisateur regarde l'image " + this.src);
    });
    $('.form-inline > input').click(function() {
        console.log("Le client clique sur la zone input");
    })
    $('.form-inline > input').on('keypress', function() {console.log("Le client écrit dans le champ input")});
});
