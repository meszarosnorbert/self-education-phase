import { initTaskList } from "./init.js";
import { getData } from "./data.js";
import { initListeners } from "./listeners.js";

document.addEventListener("DOMContentLoaded", () => {
    initTaskList(getData());
    initListeners(getData());
});
