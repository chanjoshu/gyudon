"use strict";
const result = document.getElementById("gyudon");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * 3);

    if (i == 0) {
        result.textContent = "松屋";
    } else if (i == 1) {
        result.textContent = "吉野家";
    } else {
        result.textContent = "すきや";
    }
})