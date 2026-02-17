const tapSound = document.getElementById("tapSound");

function playTap() {
    tapSound.currentTime = 0;
    tapSound.play();
}

function startExperience() {
    playTap();

    const entry = document.getElementById("entryScreen");
    const main = document.getElementById("mainScreen");

    entry.classList.remove("active");

    setTimeout(() => {
        main.classList.add("active");
    }, 400);
}

// Global tap sound (har tap pe sound)
document.addEventListener("touchstart", () => {
    playTap();
});
