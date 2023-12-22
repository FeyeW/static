var btn = document.getElementById('btn');
var cardContainer = document.getElementById('card-container');
var card = document.getElementById('card');

btn.addEventListener('click', function() {
    cardContainer.style.left = '0';
    card.style.display = 'block';
});

cardContainer.addEventListener('click', function() {
    cardContainer.style.left = '-300px';
    card.style.display = 'none';
});