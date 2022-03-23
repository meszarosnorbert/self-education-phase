// input change eseményre létrehoz  + listeners
import { setData } from "../data.js";

export const createItem = (dataSet) => {
    document.querySelector("#input-button").addEventListener("click", () => {
        let inputTask = document.querySelector("#input-text");
        let difficulty = document.querySelector("#number");

        if (inputTask.value && difficulty.value) {
            if (
                parseInt(difficulty.value) > 0 &&
                parseInt(difficulty.value) < 6
            ) {
                let newData = {
                    task: inputTask.value,
                    isCompleted: false,
                    taskDifficult: parseInt(difficulty.value),
                };

                dataSet.unshift(newData);
                setData(dataSet);
                inputTask.value = "";
                difficulty.value = "";
            } else {
                alert("The number can be between 1 and 5");
            }
        } else {
            alert("Fields must be filled in");
        }
    });
};
