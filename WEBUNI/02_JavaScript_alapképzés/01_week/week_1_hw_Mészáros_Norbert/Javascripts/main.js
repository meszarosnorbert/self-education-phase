import { initList } from "./init.js";

document.addEventListener("DOMContentLoaded", () => {
    let notFinished = [
        "Create a concept",
        "Find the conflict points",
        "Problem slicing",
    ];

    let finished = [
        "Create index.HTML file",
        "Start background music while coding",
        "Order some food.",
    ];

    // Alapstruktúra létrehozása
    initList(notFinished, finished);
    // inputon keresztül, hozzáad egy úgy elemet a notFinished listába
    addItem(notFinished, finished);
    // feladat törlés gomb
    deleteItem(notFinished, finished);
    // Ha valamelyik change esemény létrejön akkor áthelyezése kerül az adott csoport első elemeként
    changeItem(notFinished, finished);
    percent(notFinished, finished);
});

// inputon keresztül, hozzáad egy úgy elemet a notFinished listába
const addItem = (notFinished, finished) => {
    const add = document.querySelector("#input-text");
    add.addEventListener("change", (l) => {
        let value = l.target.value;
        notFinished.unshift(value);
        refreshAfterChange(notFinished, finished);
        l.target.value = "";
    });
};

// feladat törlés gomb létrehozása
const deleteItem = (notFinished, finished) => {
    for (let i = 0; i < notFinished.length + finished.length; i++) {
        document.querySelector(`#del${i}`).addEventListener("click", () => {
            if (i < notFinished.length) {
                notFinished.splice(i, 1);
                refreshAfterChange(notFinished, finished);
            } else {
                finished.splice(i - notFinished.length, 1);
                refreshAfterChange(notFinished, finished);
            }
        });
    }
};

// Ha valamelyik change esemény létrejön akkor áthelyezése kerül az adott csoport első elemeként
const changeItem = (notFinished, finished) => {
    for (let i = 0; i < notFinished.length + finished.length; i++) {
        document.querySelector(`#box${i}`).addEventListener("change", () => {
            if (i < notFinished.length) {
                finished.unshift(notFinished.splice(i, 1));
                refreshAfterChange(notFinished, finished);
            } else {
                notFinished.unshift(finished.splice(i - notFinished.length, 1));
                refreshAfterChange(notFinished, finished);
            }
        });
    }
};

const percent = (notFinished, finished) => {
    document.querySelector("#completedPercentage").textContent = "";
    let percentValue =
        (finished.length / (notFinished.length + finished.length)) * 100;
    document.querySelector("#completedPercentage").textContent +=
        Math.round(percentValue);
};

const refreshAfterChange = (notFinished, finished) => {
    initList(notFinished, finished);
    deleteItem(notFinished, finished);
    changeItem(notFinished, finished);
    percent(notFinished, finished);
};
