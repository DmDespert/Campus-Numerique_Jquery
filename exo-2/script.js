console.log('exercice 2');

/*
Il existe trois principaux types de sélecteurs en jQuery, lesquels ?
Dans le répertoire exo-2, vous trouverez une page HTML qui utilise la librairie Bootstrap. Dans le fichier script.js, écrivez des sélecteurs permettant de sélectionner les éléments suivants ( un sélecteur par ligne ) : Par exemple, si je dis sélectionner tous les éléments h4 de la page, le sélecteur associé est : \$('h4').
Sélectionner le titre du blog : "John's Blog".
Sélectionner tous les éléments du sidemenu de gauche.
Sélectionner le footer.
Sélectionner l'élément qui permet de faire la barre de recherche.
Sélectionner tous les glyphicons de la page.
Sélectionner tous les labels verts.
Sélectionner tous les paragraphes qui ont comme classe 'intro'.
Sélectionner toutes les images avec toutes les icones dont la classe est 'glyphicon-time'
Sélectionner le premier élément du sidemenu.

Bonus : sélectionner un paragraphe sur deux.
On rajoute des classes au html?
 */

$('#title').addClass('consigne1');
$('ul > li').addClass('consigne2');
$('footer').addClass('consigne3');
$('input-group').addClass('consigne4');
$('.glyphicon').addClass('consigne5');
$('.label-success').addClass('consigne6');
$('p .intro').addClass('consigne7');
$('img, .glyphicone-time').addClass('consigne8');
$('.active').addClass('consigne9');



