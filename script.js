// Paste your registration form URL between these quotation marks.
const REGISTRATION_URL = "";

const registerButton = document.querySelector("#register-button");
registerButton.addEventListener("click", () => {
  if (REGISTRATION_URL) {
    window.location.assign(REGISTRATION_URL);
  } else {
    document.querySelector("#registration-note").hidden = false;
  }
});

// Registration closes at the end of November 2 in New York (EST).
const registrationDeadline = new Date("2026-11-03T00:00:00-05:00").getTime();
const countdown = document.querySelector("#countdown");
function updateCountdown() {
  const remaining = registrationDeadline - Date.now();
  countdown.hidden = false;
  if (remaining <= 0) {
    countdown.textContent = "The November 2 registration deadline has passed.";
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  countdown.textContent = `Registration closes in ${days} ${days === 1 ? "day" : "days"} · ${hours} ${hours === 1 ? "hour" : "hours"}`;
}
updateCountdown();
setInterval(updateCountdown, 60000);

// Fit the hero's individual text lines to the photo grid after the font loads.
function fitHeroText() {
  document.querySelectorAll(".fit-line").forEach((line) => {
    line.style.fontSize = "100px";
    const range = document.createRange();
    range.selectNodeContents(line);
    const textWidth = range.getBoundingClientRect().width;
    if (textWidth > 0) {
      line.style.fontSize = `${100 * line.clientWidth / textWidth}px`;
    }
  });
}
document.fonts.ready.then(fitHeroText);
window.addEventListener("resize", fitHeroText);
