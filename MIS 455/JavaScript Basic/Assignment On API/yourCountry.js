function search() {
    var searchItem = document.getElementById("searchbox").value;
    document.getElementById("searchbox").value = "";

    var url = `https://restcountries.com/v3.1/name/${searchItem}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Check if data is empty (no results found)
            if (data.length === 0) {
                displayError("No results found.");
            } else {
                display(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            displayError("An error occurred while fetching data.");
        });
}

function display(data) {
    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    for (var i = 0; i < data.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<p>Country Name : ${data[i].name.common} <br>
                            Region : ${data[i].region} <br>
                            Sub-region : ${data[i].subregion} <br><br>
                            <img id="flag" src="${data[i].flags.png}" alt="${data[i].name.common} Flag"> <br><br>
                            Population: ${data[i].population} <br>
                            Capital: ${data[i].capital}</p><br>
                            <button class="button-5" role="button" onclick="weather('${data[i].capital}', this)">Check Weather</button>
                            <div id="weatherInfo${i}" class="weather-info"></div>`;
        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);
    }
}

function displayError(message) {
    var oldContent = document.getElementById("container");
    oldContent.textContent = message;
    oldContent.classList.add("error");
}

function weather(city, button) {
    var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=2PPUUXANFJD57FPBCHKDCNQLJ&contentType=json`;
    fetch(url)
        .then(res => res.json())
        .then(data2 => display2(data2, button));
}

function display2(data2, button) {
    var weatherInfoDiv = document.createElement("div");

    if (data2.errorCode) {
        weatherInfoDiv.textContent = "Error fetching weather data";
    } else {
        // Check if 'days' array exists and contains weather information
        if (data2.days && data2.days.length > 0) {
            // Extracting weather details for the first day (index 0)
            var weatherReport = data2.resolvedAddress;
            var weatherDateTime = data2.days[0].datetime;
            var weatherConditions = data2.days[0].conditions;
            var temperatureCelsius = Math.round((data2.days[0].tempmax - 32) * 5 / 9); // Convert temperature to Celsius
            var humidity = data2.days[0].humidity;
            var realFeel = Math.round((data2.days[0].feelslike - 32) * 5 / 9); // Convert real feel to Celsius

            // Displaying the weather information
            weatherInfoDiv.innerHTML = `<p>Location: ${weatherReport}</p>
                                        <p>Weather Report Date/Time: ${weatherDateTime}</p>
                                         <p>Weather Conditions: ${weatherConditions}</p>
                                         <p>Temperature: ${temperatureCelsius} °C</p>
                                         <p>Humidity: ${humidity}%</p>
                                         <p>Real Feel: ${realFeel} °C</p>`;
        } else {
            weatherInfoDiv.textContent = "Error: Weather data not available";
        }
    }

    // Append weather info after the button's parent element
    var parentDiv = button.parentNode;
    parentDiv.appendChild(weatherInfoDiv);
    button.disabled = true; // Disable the button after clicking to prevent multiple clicks
}
