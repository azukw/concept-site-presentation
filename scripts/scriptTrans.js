// script.js
document.getElementById('btnEntrer').addEventListener('click', function() {
    // Ajoutez la classe de fondu
    document.body.classList.add('fade-out');

    // Attendez un court instant avant de rediriger pour permettre à l'effet de fondu de se dérouler
    setTimeout(function() {
        // Rediriger vers la page TestSite.html
        window.location.href = 'TestSite.html';
    }, 500); // Temps correspondant à la durée de l'effet de fondu en millisecondes
});

