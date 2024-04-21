function connect () {
    var url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url) .then(res => res.json()) .then (data => display(data));
}

function display (data) {
    var oldContainer = document.getElementById("container");

    for (i=1; i<=data.length; i++) {
        var newDiv = document.createElement("div");

        newDiv.innerHTML = `<h1> ${data[i-1].title} </h1> <br>
                            <p><i> ${data[i-1].body} </i></p>`;

        newDiv.classList.add("newDiv");
        oldContainer.appendChild(newDiv);
    }
}