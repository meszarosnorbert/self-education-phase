import { build } from "../buildHTML.js";

export const postFetch = (targetTag, method, targetContent) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: "POST",
        body: JSON.stringify({
            userId: targetContent[1],
            title: targetContent[2],
            body: targetContent[3],
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
