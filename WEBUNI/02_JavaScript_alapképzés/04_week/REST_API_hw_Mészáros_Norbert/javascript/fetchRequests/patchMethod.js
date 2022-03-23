import { build } from "../buildHTML.js";

export const patchFetch = (targetTag, method, targetContent) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${targetContent[0]}`, {
        method: "PATCH",
        body: JSON.stringify({
            id: targetContent[0],
            title: targetContent[1],
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            build(targetTag, method, json);
        });
};
