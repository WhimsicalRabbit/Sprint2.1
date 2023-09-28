"use strict";
let doc = document.getElementById("rabbitDen");
const debounce = (fn, ms) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
const rabbit = () => {
    for (let i = 0; i < 1; i++) {
        if (doc) {
            doc.innerHTML += "🐰";
        }
    }
};
const rabbitGen = debounce(rabbit, 1000);
