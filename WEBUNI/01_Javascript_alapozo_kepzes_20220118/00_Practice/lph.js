document.addEventListener("DOMContentLoaded", () => {
    const number = document.getElementById("longNumber");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");

    number.addEventListener("change", () => {
        let value = number.value;
        one.innerHTML = "";
        one.innerHTML += `<p>${(value / 6).toFixed()}</p>`;
        two.innerHTML = "";
        two.innerHTML += `<p>${((value * 4) / 6).toFixed()}</p>`;
        three.innerHTML = "";
        three.innerHTML += `<p>${(value / 6).toFixed()}</p>`;
    });
});
