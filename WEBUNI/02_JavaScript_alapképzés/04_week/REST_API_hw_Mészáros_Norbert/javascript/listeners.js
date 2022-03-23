import { deleteFetch } from "./fetchRequests/deleteMethod.js";
import { getFetch } from "./fetchRequests/getMethod.js";
import { patchFetch } from "./fetchRequests/patchMethod.js";
import { postFetch } from "./fetchRequests/postMethod.js";
import { putFetch } from "./fetchRequests/putMethod.js";

export const initListeners = (targetTag) => {
    /*
    Minden 'fetch' szot tartalmazo methodus 3 elemet kap parameterul az alabbi sorrendben:
        1. a cel, ahova az eredmenyt irjuk ki
        2. az elvart mathodus neve mint pl:get / put / post
        3. az azonsosito vagy azt tartalmazo tomb
    */

    // Torli az ossyes kirt elemet
    document.querySelectorAll(".clear-button").forEach((button) => {
        button.addEventListener("click", () => {
            targetTag.innerHTML = "";
        });
    });

    // Minden elemet letrehoz es kiirja
    document.getElementById("get-all").addEventListener("click", () => {
        getFetch(targetTag, "get", "");
    });

    // Az "Id" alapjan letrehoz egy elemet
    document.getElementById("get-by-id").addEventListener("click", () => {
        let targetId = document.getElementById("get-input").value;

        if (targetId > 0 && targetId < 101) {
            getFetch(targetTag, "get", targetId);
            targetId = "";
        } else {
            alert("Error: out of range");
            targetId = "";
        }
    });

    document
        .getElementById("add-new-or-update")
        .addEventListener("click", () => {
            let targetId = document.getElementById("id-add-input").value;
            let userId = document.getElementById("userid-add-input").value;
            let title = document.getElementById("title-add-input").value;
            let body = document.getElementById("body-add-input").value;

            let targetContent = [targetId, userId, title, body];

            if (targetId) {
                putFetch(targetTag, "put", targetContent);
            } else {
                postFetch(targetTag, "post", targetContent);
            }
        });

    document.getElementById("patch-title").addEventListener("click", () => {
        let targetId = document.getElementById("id-patch-input").value;
        let title = document.getElementById("title-patch-input").value;

        let targetContent = [targetId, title];

        patchFetch(targetTag, "patch", targetContent);
    });

    document.getElementById("delete-by-id").addEventListener("click", () => {
        let targetId = document.getElementById("id-delete-input").value;

        deleteFetch(targetTag, "delete", targetId);
    });
};
