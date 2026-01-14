// JS code for Start button
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    window.location.href = 'list.html';
});



        const startScreen = document.getElementById('start-screen');
        const mainMenu = document.getElementById('main-menu');
        const music = document.getElementById('bg-music');

        document.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                // hide start screen
                startScreen.style.display = "none";
                // show main menu
                mainMenu.style.display = "flex";
                // unmute and play music
                music.muted = false;
                music.volume = 0.3; // optional, adjust for flow-state vibe
                music.play().catch(() => {
                    console.log("Autoplay blocked, will start on user interaction.");
                });
            }
        });