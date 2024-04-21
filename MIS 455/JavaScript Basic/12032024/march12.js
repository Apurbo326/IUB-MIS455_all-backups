function connect () {
    var url = "https://jsonplaceholder.typicode.com/users";

    // try to access URL, make data in JSON format, send data to display function
    fetch (url) .then (res => res.json ()) .then (data => display(data));
}

function display (data) {
    // Take a blank container
    var oldContent = document.getElementById("container");

    // Run loop to data length
    for (i=1; i<=data.length; i++) {
        // take blank div
        var newDiv = document.createElement("div");
        // which data we wants to show
        newDiv.innerHTML = `Name : ${data[i-1].name} <br>
                            Email: ${data[i-1].email} <br>
                            City : ${data[i-1].address.city} <br><br>`;
        // add class for new div to use css
        newDiv.classList.add("innerStyle");

        // Add those data to the old blank container
        oldContent.appendChild(newDiv);
    }
}