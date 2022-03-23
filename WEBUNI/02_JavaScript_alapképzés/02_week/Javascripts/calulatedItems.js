export const percent = (dataSet) => {
    let calculateProgess = 0;

    dataSet.forEach((data) => {
        if (data.isCompleted) {
            calculateProgess++;
        }
    });

    document.querySelector("#completedPercentage").textContent = `${Math.round(
        (calculateProgess / dataSet.length) * 100
    )}`;

    /*
    // Valahogy nem tudom működésre bírni, Mi lehet a hiba?
        //function test(dataSet)
        //​length: 1
​        //name: "test"
​        //<prototype>: function ()

    let test = (dataSet) => {
        dataSet.filter((d) => {
            d.isCompleted == false;
        }).length;
    };

    console.log(test);
    */
};

// find() megkeresi a legnagyobb nem befejezett elemet, ha minden kész akkor visszatér 0-val
export const hardestItem = (dataSet) => {
    let hardestItem = Math.max(
        ...dataSet.map((t) => (!t.isCompleted ? t.taskDifficult : 0))
    );
    document.querySelector("#hardest").textContent = hardestItem;
    if (hardestItem) {
        document.querySelector("#hardest-task").textContent = dataSet.find(
            (t) => t.taskDifficult === hardestItem
        ).task;
    } else {
        document.querySelector("#hardest-task").textContent =
            "All tasks completed";
    }
};
