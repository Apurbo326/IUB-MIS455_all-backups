var url = "https://restcountries.com/v3.1/all";

// Store a reference to the currently displayed details and weather info
var currentDetails = null;
var currentWeatherInfo = null;

fetch(url)
    .then(res => res.json())
    .then(data => display(data));

function display(data) {
    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    for (var i = 0; i < data.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<p>Country Name : ${data[i].name.common} <br>
                            Region : ${data[i].region} <br>
                            Sub-region : ${data[i].subregion} </p><br><br>
                            <button class="button-50" role="button" onclick="seeMore('${data[i].name.common}', '${data[i].flags.png}', '${data[i].population}', '${data[i].capital}', this)">See more</button>`;
        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);
    }
}

function seeMore(countryName, flag, population, capital, button) {
    // Remove the currently displayed details if any
    if (currentDetails) {
        currentDetails.parentNode.removeChild(currentDetails);
        currentDetails = null;
    }
    // Remove the currently displayed weather info if any
    if (currentWeatherInfo) {
        currentWeatherInfo.parentNode.removeChild(currentWeatherInfo);
        currentWeatherInfo = null;
    }

    // Create new details
    var detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    detailsDiv.innerHTML = `<br><img id="flag" src="${flag}" alt="${countryName} Flag"> <br><br>
                            <p id="text">Population: ${population} <br>
                            Capital: ${capital}</p>`;

    // Append details after the button's parent element
    var parentDiv = button.parentNode;
    parentDiv.appendChild(detailsDiv);

    // Store a reference to the currently displayed details
    currentDetails = detailsDiv;

    // Fetch weather data
    weather(capital, button);
}

function weather(city, button) {
    var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=2PPUUXANFJD57FPBCHKDCNQLJ&contentType=json`;
    fetch(url)
        .then(res => res.json())
        .then(data => display2(data, button))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayWeatherError(button);
        });
}

function display2(weatherData, button) {
    var weatherInfoDiv = document.createElement("div");

    if (weatherData.errorCode) {
        weatherInfoDiv.textContent = "Error fetching weather data";
    } else {
        // Extracting relevant weather information
        var weatherReport = weatherData.resolvedAddress;
        var weatherDateTime = weatherData.days[0].datetime;
        var weatherConditions = weatherData.days[0].conditions;
        var temperatureCelsius = weatherData.days[0].temp;
        var humidity = weatherData.days[0].humidity;
        var realFeel = weatherData.days[0].feelslike;

        // Formatting temperature to Celsius
        temperatureCelsius = Math.round((temperatureCelsius - 32) * 5 / 9);

        // Displaying weather information
        weatherInfoDiv.innerHTML = `<br><p>Location: ${weatherReport}</p>
                                    <p>Weather Report Date/Time: ${weatherDateTime}</p>
                                    <p>Conditions: ${weatherConditions}</p>
                                    <p>Temperature: ${temperatureCelsius} °C</p>
                                    <p>Humidity: ${humidity}%</p>
                                    <p>Real Feel: ${realFeel} °C</p>`;
    }

    // Append weather info after the button's parent element
    var parentDiv = button.parentNode;
    parentDiv.appendChild(weatherInfoDiv);

    // Store a reference to the currently displayed weather info
    currentWeatherInfo = weatherInfoDiv;
}

function displayWeatherError(button) {
    var weatherInfoDiv = document.createElement("div");
    weatherInfoDiv.textContent = "Error fetching weather data";
    var parentDiv = button.parentNode;
    parentDiv.appendChild(weatherInfoDiv);

    // Store a reference to the currently displayed weather info
    currentWeatherInfo = weatherInfoDiv;
}
