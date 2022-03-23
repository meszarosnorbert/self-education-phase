document.addEventListener("DOMContentLoaded", () => {
    /* Órai munka kezdete. */
    const email = localStorage.getItem("email");
    if (email) {
        document.getElementById("email").setAttribute("value", email);
    }
    document.getElementById("submit").addEventListener("click", () => {
        const email = document.getElementById("email").value;
        console.log(email);
        console.log(document.querySelector("#feedback").value);
        localStorage.setItem("email", email);
    });

    /* Gyakorlás kezdete. */
    const counter = "formCount";
    const sendButton = document.getElementById("submit");
    const formCounter = document.getElementById("formCounter");
    const textArea = document.getElementById("feedback");
    const number = document.getElementById("number");
    const ulList = document.getElementById("ul-list");
    let count = localStorage.getItem(counter);
    let baseListCount = document.getElementById("number").value;

    // Ha 'count' üres, az az először hozom létre, akkor beállítja a 'counter értékét 0-ra'.
    if (!count) {
        count = 0;
    }

    // Létrehoz a html elementen belül a value tag-nek megfelelő hosszúsáhú listát.
    for (let i = 0; i < baseListCount; i++) {
        ulList.innerHTML += `<li>${i + 1}</li>`;
    }

    // Kiírja az aktuális kitöltések számát.
    formCounter.innerText = count;

    // Ha 'send' lenyomásra kerül akkor indít egy eseményt.
    sendButton.addEventListener("click", () => {
        // Eggyel növeli a countot.
        count++;
        // alert(counter + ":" + count);
        localStorage.setItem(counter, count);
        // Frissíti a html-t az új count értékkel;
        formCounter.innerText = count;
        // örli a textarea tartalmát.
        textArea.value = "";
    });

    // Enter vagy a léptető használata után frissíti listát.
    number.addEventListener("change", (e) => {
        const numberValue = e.target.value;
        ulList.innerHTML = "";

        // Létrehoz egy az új értéknek megfelelő hosszósáhú listát.
        for (let i = 0; i < numberValue; i++) {
            ulList.innerHTML += `<li>${i + 1}</li>`;
        }
    });
});
