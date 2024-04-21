function connect () {
    var searchTerm = document.getElementById("searchBox").value;
    document.getElementById("searchBox").value = "";

    if (searchTerm!=""){
        document.getElementById("searchResult").innerHTML = `<p><i>Showing search result for '${searchTerm}'...</i></p>`;
        var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;    
        fetch (url) .then (res=>res.json()) .then (data=> display(data.meals));
    }else{
        document.getElementById("searchResult").innerHTML = `<p><i>Showing random recipes...</i></p>`;
        var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;    
        fetch (url) .then (res=>res.json()) .then (data=> display(data.meals));
    }
}

function display(items) {
    // console.log(items);

    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    for (var i=1; i<=items.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="hero"> 
                                <div class="hero__title">
                                    <h1> ${items[i-1].strMeal} </h1> <br> <br>
                                    <img src="${items[i-1].strMealThumb}"> <br>
                                    <p id="instruction"><b><i>Instruction : </b></i>${items[i-1].strInstructions}</p>
                                </div>
                            <div class="cube"></div>
                            <div class="cube"></div>
                            <div class="cube"></div>
                            <div class="cube"></div>
                            <div class="cube"></div>
                            <div class="cube"></div>
                        </div>
                        <br>`;
        
        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);
    }
}