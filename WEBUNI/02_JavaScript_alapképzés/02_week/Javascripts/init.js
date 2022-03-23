import { hardestItem, percent } from "./calulatedItems.js";
import { refreshAfterChange } from "./listeners.js";

export const initTaskList = (dataSet) => {
    const docFinished = document.querySelector("#finished");
    const docNotFinished = document.querySelector("#not-finished");

    docNotFinished.innerHTML = "";
    docFinished.innerHTML = "";

    // filter kellen beszúrni, hogy a sorszám 1.től induljon változás után is isCompleted = false
    let counter = 0;

    dataSet.forEach((data, index) => {
        if (!data.isCompleted) {
            counter++;
            docNotFinished.innerHTML += `
        <div  class="container">
        <span class="delete" id="del${index}">&#10006;</span>
            <input type="checkbox" id="box${index}" >
            <label for="box${index}">${counter}. ${data.task} --> ${data.taskDifficult}</label>
        </div>`;
        }
    });

    dataSet.forEach((data, index) => {
        if (data.isCompleted) {
            counter++;
            docFinished.innerHTML += `
        <div class="container">
        <span class="delete" id="del${index}">&#10006;</span>
            <input type="checkbox" id="box${index}" checked>
            <label for="box${index}">${counter}. ${data.task} --> ${data.taskDifficult}</label>
        </div>`;
        }
    });

    refreshAfterChange(dataSet);
    percent(dataSet);
    hardestItem(dataSet);
};
