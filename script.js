document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");

    yesBtn.addEventListener("click", function () {
        message.textContent = "Tu hi bata de ab kaha aur kab jaana hai, Genuinely I feel bad!";
    });

    noBtn.addEventListener("click", function () {
        let currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        if (currentSize < 120) { // Limit the button size to prevent it from growing indefinitely
            noBtn.style.fontSize = currentSize * 1.5 + "px";
        }
    });
});
