import { build } from "../buildHTML.js";

export const deleteFetch = (targetTag, method, targetId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${targetId}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((json) => {
            build(targetTag, method, json);
        });
};
