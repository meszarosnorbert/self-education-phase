import { build } from "../buildHTML.js";

export const getFetch = (targetTag, method, targetId) => {
    const sourceJson = fetch(
        `https://jsonplaceholder.typicode.com/posts/${targetId}`
    );

    if (!targetId == "") {
        sourceJson
            .then((response) => response.json())
            .then((json) => {
                build(targetTag, method, json);
            });
    } else {
        sourceJson
            .then((response) => response.json())
            .then((json) => {
                json.forEach((element) => {
                    build(targetTag, method, element);
                });
            });
    }
};
