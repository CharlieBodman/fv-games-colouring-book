import ColouringBook from './scripts/game';

document.addEventListener("DOMContentLoaded", function(event) { 
    const gameContainer = document.getElementById('game');
    ColouringBook.init(gameContainer,{});
});