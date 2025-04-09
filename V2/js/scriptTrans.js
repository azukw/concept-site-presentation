document.getElementById('btnEntrer').addEventListener('click', function() {
    document.body.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = 'index.html';
    }, 500); 
});

