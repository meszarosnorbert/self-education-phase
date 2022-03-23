export const initList = (notFinished, finished) => {
    const docFinished = document.querySelector("#finished");
    const docNotFinished = document.querySelector("#not-finished");

    docNotFinished.innerHTML = "";
    notFinished.forEach((l, i) => {
        docNotFinished.innerHTML += `
        <div class="container">
        <span class="delete" id="del${i}">X</span>
            <input type="checkbox" id="box${i}">
            <label for="box${i}">${l}</label>
        </div>`;
    });

    docFinished.innerHTML = "";
    finished.forEach((l, i) => {
        let j = notFinished.length;
        docFinished.innerHTML += `
        <div  class="container">
        <span class="delete" id="del${i + j}">X</span>
            <input type="checkbox" id="box${i + j}" checked>
            <label for="box${i + j}">${l}</label>
        </div>`;
    });
};
