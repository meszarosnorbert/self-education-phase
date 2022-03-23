// POST törlése
for (let index = 99; index > 98; index--) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((json) => {
            container.innerHTML += `
                <section id="delete-method" class="tile">
                <p>Adat kerese { method: "DELETE"}</p>
                <p>userId: ${json["userId"]}</p>
                <p>id: ${json["id"]}</p>
                <p>title: ${json["title"]}</p>
                <p>body: ${json["body"]}</p>
            </section>
            `;
        });
}
