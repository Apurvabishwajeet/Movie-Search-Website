document.querySelector('button').addEventListener('click', function() {
    document.body.classList.add('slide-out-up');
    setTimeout(function() {
        window.location.href = 'search.html';
    }, 500);
});
