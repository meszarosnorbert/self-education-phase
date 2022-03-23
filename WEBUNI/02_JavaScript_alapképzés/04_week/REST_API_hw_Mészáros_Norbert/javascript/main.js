import { initListeners } from "./listeners.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");

    initListeners(container);
});
