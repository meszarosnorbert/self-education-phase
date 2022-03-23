document.addEventListener("DOMContentLoaded", () => {
    const wasd = "name"; // LocalStorage-ban kulcs-érték párokat tárolunk, a 'name' kulcsot fogjuk tárolni a példában
    const input = document.getElementById("name");
    const storedValue = localStorage.getItem(wasd); // Egy adott kulcs alatt tárolt érték lekérése

    if (storedValue) {
        // Mindig ellenőrizzük használat előtt a kapott értéket, mert lehet, hogy nem létezik (pl.: felhasználó törölte a böngészési előzményeit)
        input.value = storedValue;
    }

    const saveButton = document.getElementById("addName");
    saveButton.addEventListener("click", () => {
        // Egy érték eltárolása egy kulcshoz
        localStorage.setItem(wasd, input.value);
    });

    const deleteButton = document.getElementById("deleteName");
    deleteButton.addEventListener("click", () => {
        // Egy kulcs és a hozzátartozó érték törlése
        localStorage.removeItem(wasd);
    });

    const pushAlert = document.getElementById("dontPush");
    pushAlert.addEventListener("click", () => {
        alert("nem meg mondtam, hogy ne nyomd meg?");
    });

    const inp = document.querySelector(".event");

    inp.value = "webuni";

    // folyamatosan logol, minden az inputba történő leütéskor
    inp.addEventListener("input", (e) => {
        console.log("input esemény", e.target.value);
    }); // Input aktuális értékének elérése 1.: e.target.value

    // enter leütésekor logol csak
    inp.addEventListener("change", (e) => {
        console.log("change esemény", inp.value);
    }); // Input aktuális értékének elérése 2.: input.value

    document.querySelector("#number").addEventListener("change", (e) => {
        const value = e.target.value;

        const div = document.getElementById("blocks");
        div.innerHTML = "";

        for (let i = 0; i < value; i++) {
            div.innerHTML += `<div><button>${i + 1}. gomb</button></div>`;
        }

        document.querySelectorAll("button").forEach((button, i) => {
            button.addEventListener("click", () => {
                alert(`Ezen az oldalon a ${i + 1}. gombot nyomtad meg`);
            });
        });
    });
});
