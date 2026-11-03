const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const siteContent = document.getElementById("siteContent");
const music = document.getElementById("siteMusic");

enterBtn.addEventListener("click", async () => {
  // Browsers allow audio playback after this user interaction.
  try {
    music.volume = 0.55;
    await music.play();
  } catch (error) {
    console.warn("Music could not start. Check that music.mp3 exists.", error);
  }

  intro.classList.add("hide");
  siteContent.classList.add("visible");
  document.body.classList.add("entered");
  setTimeout(() => intro.setAttribute("aria-hidden", "true"), 950);
});

// Reveal sections smoothly as the visitor scrolls.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("show"));
}

// Keep both background videos looping and recover if playback is interrupted.
document.querySelectorAll(".bg-video").forEach(video => {
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });
});
