import { setData } from "../data.js";

// feladat törlés gomb létrehozása
export const deleteItem = (dataSet) => {
    dataSet.forEach((element, index) => {
        document.querySelector(`#del${index}`).addEventListener("click", () => {
            dataSet.splice(index, 1);
            setData(dataSet);
        });
    });
};
