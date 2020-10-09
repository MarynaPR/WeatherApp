//GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
var apiKeys = "8d27861de0e9d9289a864a13d6ed84d0";

//fuction to input city
function searchFavCity(event) {
    // event.preventDefault()
    var searchCity = document.querySelector("#searchCity").value.trim();
    // weatherCall(searchCity);
    //  citiesSearched(searchCity);
    if (searchCity) {
        getForecast(searchCity);
        citiesSearched();
        storeCitiesSearched(searchCity);
    }
    else {
        alert("Select a City");
    }
    //document.querySelector("#citySearched").value = "";
}

// store cities searched
function storeFavCity() {
    var displayCity = document.getElementById("");
    var searchCity = document.getElementById("searchCity");

    displayCity.innerHTML = "weather in" + searchCity.value;

    localStorage.setItem("cityStorage", JSON.stringify(cities));
}
var cities = JSON.parse(localStorage.getItem("cityStorage")) || [];


//function for weather for today
function weatherCall() {
    //console.log("get the weather!")
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + searchCity
        + "&appid=8d27861de0e9d9289a864a13d6ed84d0&units=imperial"
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            var searchCity = response.querySelector[0].title;
            //display
            var responseHeaderEl = document.quarySelector("#")
            responseContainerEl.innerHTML = "<h2>" + searchCity + "</h2>";
        })

    // return fetch(
    //     "http://api.openweathermap.org/data/2.5/weather?q="
    //     + searchCity
    //     //Madison
    //     + "&appid="
    //     //8d27861de0e9d9289a864a13d6ed84d0
    //     + apiKeys
    //     + "units=imperial"
    // )
}
//weather forecast
function getForecast(searchCity) {
    //fetch request
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + searchCity
        + "&appid="
        //8d27861de0e9d9289a864a13d6ed84d0
        + apiKeys
        + "units=imperial"
    )
        //convert the response to JSON
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(getForecast, response);
        })
}

document.querySelector("#searchBtn").addEventListener("click", searchFavCity);


//     $(".weatherResponse").html("");//clear
//     $.getJSON(apiCall, weatherCallback);
//     //function to call the data
//     //var weatherCallback = function (weatherData) {
//     function weatherCallback(weatherData) {
//         // variables for the description
//         var cityName = weatherData.name;
//         var country = weatherData.sys.country;
//         var description = weatherData.weather[0].description;
//         //class =weatherResponse
//         //$(".weatherResponse").append(cityName, country, description);
//         $(".weatherResponse").append("The weathr in " + cityName + " " + country + " is currently "
//             + description);
//         //console.log(weatherData.name,
//         //   weatherData.sys.country,
//         //  weatherData.weather[0].description);