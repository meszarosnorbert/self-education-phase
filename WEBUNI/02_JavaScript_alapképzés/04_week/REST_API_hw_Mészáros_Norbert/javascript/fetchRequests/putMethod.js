import { build } from "../buildHTML.js";

export const putFetch = (targetTag, method, targetContent) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${targetContent[0]}`, {
        method: "PUT",
        body: JSON.stringify({
            id: targetContent[0],
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
