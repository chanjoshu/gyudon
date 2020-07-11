"use strict";
const result = document.getElementById("gyudon");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * 4);

    if (i == 0) {
        result.textContent = "松屋";
    } else if (i == 1) {
        result.textContent = "吉野家";
    } else if (i == 2) {
        result.textContent = "すき家";
    }
    else {
        result.textContent = "なか卯";
    }
})