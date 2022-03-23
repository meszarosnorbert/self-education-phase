import { setData } from "../data.js";
// checkbox változás + listeners

// rendezés növekvő és csökkenő + listeners

export const changeItem = (dataSet) => {
    dataSet.forEach((data, index) => {
        document
            .querySelector(`#box${index}`)
            .addEventListener("change", () => {
                data.isCompleted = !data.isCompleted;
                let newData = data;
                dataSet.splice(index, 1);
                dataSet.unshift(newData);
                setData(dataSet);
            });
    });
};

//lopott részlet a megoldásból
export const initOrderButtons = (dataSet) => {
    document
        .querySelector("#increasing-order")
        .addEventListener("click", () => {
            setData(
                dataSet.sort((t1, t2) =>
                    t1.taskDifficult < t2.taskDifficult
                        ? -1
                        : t1.taskDifficult === t2.taskDifficult
                        ? 0
                        : 1
                )
            );
        });

    document
        .querySelector("#decreasing-order")
        .addEventListener("click", () => {
            setData(
                dataSet.sort((t1, t2) =>
                    t1.taskDifficult < t2.taskDifficult
                        ? 1
                        : t1.taskDifficult === t2.taskDifficult
                        ? 0
                        : -1
                )
            );
        });
};
