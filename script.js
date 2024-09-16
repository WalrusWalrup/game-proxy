window.addEventListener('load', function() {
    // Initialize Ruffle
    var ruffle = window.RufflePlayer.newest();
    var container = document.getElementById('game-container');
    var player = ruffle.createPlayer();
    container.appendChild(player);

    // Load the SWF file
    player.load('https://github.com/spencer112/Unblocked-Flash-Games/raw/master/happyWheels.swf');
});
