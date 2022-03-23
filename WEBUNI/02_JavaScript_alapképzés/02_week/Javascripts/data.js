import { initTaskList } from "./init.js";

let dataSet = [
    { task: "Create a concept", isCompleted: false, taskDifficult: 4 },
    { task: "Find the conflict points", isCompleted: false, taskDifficult: 3 },
    { task: "Problem slicing", isCompleted: false, taskDifficult: 5 },
    { task: "Create index.HTML file", isCompleted: true, taskDifficult: 2 },
    {
        task: "Start background music while coding",
        isCompleted: true,
        taskDifficult: 1,
    },
    { task: "Order some food.", isCompleted: true, taskDifficult: 1 },
];

export const getData = () => {
    return dataSet;
};

export const setData = (newDataSet) => {
    console.clear();
    console.table(dataSet);
    dataSet = newDataSet;
    initTaskList(dataSet);
};
