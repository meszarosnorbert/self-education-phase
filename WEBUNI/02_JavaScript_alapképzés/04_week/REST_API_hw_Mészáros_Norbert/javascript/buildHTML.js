export const build = (targetTag, methodType, json) => {
    targetTag.innerHTML += `
    <section class="tile" id="${methodType}-method" >
    <p>Data request { method: "${methodType.toUpperCase()}"}</p>
    <p>userId: ${json["userId"]}</p>
    <p>id: ${json["id"]}</p>
    <p>title: ${json["title"]}</p>
    <p>body: ${json["body"]}</p>
    </section>`;
};
