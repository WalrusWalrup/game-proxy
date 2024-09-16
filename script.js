window.addEventListener('load', function() {
    // Initialize Ruffle
    var ruffle = window.RufflePlayer.newest();
    var container = document.getElementById('game-container');
    var player = ruffle.createPlayer();
    container.appendChild(player);

    // Use CORS proxy to load the SWF file
    player.load('https://cors-anywhere.herokuapp.com/https://github.com/spencer112/Unblocked-Flash-Games/raw/master/happyWheels.swf');
});
