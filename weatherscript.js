//     "http://api.openweathermap.org/data/2.5/weather?q="
//     + searchCity
//     //Madison
//     + "&appid="
//     //8d27861de0e9d9289a864a13d6ed84d0
//     + apiKeys
//     + "units=imperial"
//GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
var apiKeys = "8d27861de0e9d9289a864a13d6ed84d0";
var cities = [];
var responseContainerEl = document.querySelector("#weatherCall");
var fiveDayForecast = document.querySelector("#fiveDayContainer");
var fiveDayForecast = document.querySelector("#fiveDayContainer");
//fuction to input city
function searchFavCity() {
    console.log("show")
    // event.preventDefault()
    var searchCity = document.querySelector("#searchCity").value.trim();
    // weatherCall(searchCity);
    //  citiesSearched(searchCity);
    var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=8d27861de0e9d9289a864a13d6ed84d0";
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
searchFavCity();
// store cities searched
function storeFavCity() {
    console.log("city");

    // loop
    for (var i = 0; i < cities.length; i++) {
        //buttons for each city in the array
        var listOfCities = $("<button>");
        //class
        listOfCities.addClass("btn");
        listOfCities.attr("searchCity", cities[i]);
        listOfCities.text(cities[i]);
        // add button
        $("#list-group").append(listOfCities);
    }
}

//click the button on city name
$("#searchCity").on("click", function (event) {
    event.preventDefault();
    //add entered input
    var city = $("#citySearch").value().trim();
    //add city to array
    cities.push(city);
})

storeFavCity();
$(document).on("click", ".searchBtn", searchFavCity);
//document.querySelector("#searchBtn").addEventListener("click", searchFavCity);
// var cities = JSON.parse(localStorage.getItem("cityStorage")) || [];


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
            var temperature = response.list[i].main.temp//main.humidity//
            var dateYYYYMMDDHH = response.list[i].dt - text
            var calendar = moment(dateYYYYMMDDHH).format("dddd, MMMM Do YYYY, h:mm:ss a")
            var humidity = response.list[i].weather[0].main
            var emoji = response.list[i].weather[0].main

            responseContainerEl.innerHTML = "<h2>" + searchCity + "</h2>";
            fiveDayForecast.innerHTML = "";
            //emoji
            if (emoji == "Clouds") {
                emoji = "☁️"
            } else if (emoji == "Thunderstorm") {
                emoji = "⛈"
            } else if (emoji == "Drizzle") {
                emoji = "🌧"
            } else if (emoji == "Rain") {
                emoji = "🌧"
            } else if (emoji == "Snow") {
                emoji = "❄️"
            } else if (emoji == "Clear") {
                emoji = "☀️"
            }
        })

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
        .then(function (response) {
            console.log("getForecast", response);

            fiveDayForecast.innerHTML = "<h3 class=\"mt-3\">5-Day Forecast:</h3>";
            fiveDayForecastRow = document.createElement("div");
            fiveDayForecastRow.name = "\"row\"";
            //
            for (var i = 0; i < response.list.length; i += 5) {
                var temperature = response.list[i].main.temp//main.humidity//
                var dateYYYYMMDDHH = response.list[i].dt - text
                var calendar = moment(dateYYYYMMDDHH).format("dddd, MMMM Do YYYY, h:mm:ss a")
                var humidity = response.list[i].weather[0].main
                var emoji = response.list[i].weather[0].main
                //emoji
                if (emoji == "Clouds") {
                    emoji = "☁️"
                } else if (emoji == "Thunderstorm") {
                    emoji = "⛈"
                } else if (emoji == "Drizzle") {
                    emoji = "🌧"
                } else if (emoji == "Rain") {
                    emoji = "🌧"
                } else if (emoji == "Snow") {
                    emoji = "❄️"
                } else if (emoji == "Clear") {
                    emoji = "☀️"
                }

                responseContainerEl.innerHTML = "";


            }
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

storeFavCity();