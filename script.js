// ======================
// PAGE FADE
// ======================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);

});


// ======================
// MUSIC
// ======================
// MUSIC PLAYER

const audio =
    document.getElementById(
        "bgMusic"
    );

function playMusic(file){

    audio.src = file;

    audio.play();

}

const volume =
    document.getElementById(
        "volume"
    );

volume.addEventListener(
    "input",
    () => {

        audio.volume =
            volume.value / 100;

    }
);

const music =
    document.getElementById(
        "bgMusic"
    );

const musicBtn =
    document.getElementById(
        "musicBtn"
    );

musicBtn.onclick = () => {

    if (music.paused) {

        music.play();

        musicBtn.innerText =
            "🔇 MUTE";

    } else {

        music.pause();

        musicBtn.innerText =
            "🎵 MUSIC";
    }
};


// ======================
// VIDEO BACKGROUND
// ======================

const video =
    document.getElementById(
        "bgVideo"
    );

video.addEventListener(
    "loadeddata",
    () => {

        video.style.display =
            "block";
    }
);


// ======================
// LANGUAGE
// ======================

const enBtn =
    document.getElementById(
        "enBtn"
    );

const arBtn =
    document.getElementById(
        "arBtn"
    );

enBtn.onclick = () => {

    enBtn.classList.add(
        "active"
    );

    arBtn.classList.remove(
        "active"
    );

    document.documentElement.lang =
        "en";
};

arBtn.onclick = () => {

    arBtn.classList.add(
        "active"
    );

    enBtn.classList.remove(
        "active"
    );

    document.documentElement.lang =
        "ar";
};


// ======================
// COUNTERS
// ======================

const counters =
    document.querySelectorAll(
        ".counter"
    );

let started = false;

function startCounters() {

    if (started) return;

    const section =
        document.querySelector(
            ".cards"
        );

    if (
        section
            .getBoundingClientRect()
            .top <
        window.innerHeight - 100
    ) {

        started = true;

        counters.forEach(
            (counter) => {

                const target =
                    Number(
                        counter.dataset
                               .target
                    );

                let current = 0;

                const increment =
                    Math.max(
                        1,
                        target / 150
                    );

                function update() {

                    if (
                        current < target
                    ) {

                        current +=
                            increment;

                        counter.innerText =
                            Math.floor(
                                current
                            ).toLocaleString();

                        requestAnimationFrame(
                            update
                        );

                    } else {

                        counter.innerText =
                            target.toLocaleString();
                    }
                }

                update();

            }
        );
    }
}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


// ======================
// CARD ANIMATION
// ======================

const cards =
    document.querySelectorAll(
        ".card"
    );

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }
                }
            );

        },

        {
            threshold:0.2
        }

    );

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        ".8s";

    observer.observe(card);

});


// ======================
// HOVER EFFECT
// ======================

cards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );

});