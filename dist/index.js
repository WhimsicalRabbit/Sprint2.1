"use strict";
function message() {
    console.log("The rabbit is jumping");
}
const debounce = (fn, ms) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
const rabbit = debounce(message, 1000);
module.exports = { rabbit, debounce, message };
