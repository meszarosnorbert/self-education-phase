document.addEventListener("DOMContentLoaded", () => {
    const one = document.querySelector("#one");
    const two = document.querySelector("#two");
    const three = document.querySelector("#three");
    const four = document.querySelector("#four");
    const five = document.querySelector("#five");

    // elsó Promise
    const firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First promise 1000ms delay");
        }, 1000);
    });

    firstPromise.then((value) => {
        one.textContent += value;
    });

    // második Promise async / await verzió
    const secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise 500ms delay");
        }, 500);
    });

    const secondTestAwait = async () => {
        let value = await secondPromise;
        two.textContent += value;
    };

    secondTestAwait();

    // harmadik Promise random hibával
    const thirdPromise = new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            setTimeout(() => {
                resolve("Third resolve promise 100ms delay");
            }, 100);
        } else {
            setTimeout(() => {
                reject("!!! Third reject promise 100ms delay!!!");
            }, 100);
        }
    });

    thirdPromise
        .then((value) => {
            three.textContent += value;
        })
        .catch((error) => {
            three.textContent += error;
        });

    // negyedik Promise async / await verzió
    const fourthPromise = new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            setTimeout(() => {
                resolve("Fourth resolve promise 1200ms delay");
            }, 1200);
        } else {
            setTimeout(() => {
                reject("!!! Fourth reject promise 1200ms delay!!!");
            }, 1200);
        }
    });

    const fourthTestAwait = async () => {
        try {
            let value = await fourthPromise;
            four.textContent += value;
        } catch (error) {
            four.textContent += error;
        }
    };

    fourthTestAwait();

    fetch(
        "https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json"
    )
        .then(async (response) => {
            let value = await response.json();
            five.textContent += "fetch:" + value["description"]["title"];
        })
        .catch((error) => {
            alert(error);
        });

    const topBun = document.querySelector("#top-bun");
    const bottomBun = document.querySelector("#bottom-bun");
    const salad = document.querySelector("#salad");
    const beef = document.querySelector("#beef");
    const hamburger = document.querySelector("#hamburger");

    const bunBake = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("brown");
        }, 7000);
    });

    const sliceSalad = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("green");
        }, 5000);
    });

    const beefBake = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("goldenrod");
        }, 15000);
    });

    const bunBakeAwait = async () => {
        try {
            let value = await bunBake;
            topBun.style.background = value;
            bottomBun.style.background = value;
        } catch (error) {
            alert(error);
        }
    };

    const sliceSaladAwait = async () => {
        try {
            let value = await sliceSalad;
            salad.style.background = value;
        } catch (error) {
            alert(error);
        }
    };

    const beefBakeAwait = async () => {
        try {
            let value = await beefBake;
            beef.style.background = value;
        } catch (error) {
            alert(error);
        }
    };

    Promise.all([bunBakeAwait(), sliceSaladAwait(), beefBakeAwait()]).then(
        () => {
            setTimeout(() => {
                hamburger.style.filter = "grayscale(0)";
            }, 10000);
        }
    );
});
