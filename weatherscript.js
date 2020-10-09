
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
var apiKeys = "8d27861de0e9d9289a864a13d6ed84d0";

//weather forecast
function getForecast(searchCity) {

    //fetch request for (Madison) city

    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + searchCity
        //Madison
        + "&appid="
        //8d27861de0e9d9289a864a13d6ed84d0
        + apiKeys
        + "units=imperial"
    )
        // //convert the response to JSON
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(getForecast, response);
        })
}


function searchFavCity(event) {
    event.preventDefault()
    var searchCity = document.querySelector("#searchCity").value.trim();

    if (searchCity) {
        getForecast(searchCity);
        citiesSearched();
        storeCitiesSearched(searchCity);
    }
    else {
        alert("Select a City");
    }
    document.querySelector("#citiesSearched").value = "";
}


function citiesSearched() {
    //get the city names
    //  var cityName = $("cityName").value;
    //  var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8d27861de0e9d9289a864a13d6ed84d0";
    //list
    for (var i = 0; i < cities.length; i++) {
        var itemToDo = onclick("#submit");
        itemToDo.text(cities[i]);
        //to click on each citySearched add onclick button
        $("#citiesSearched").append(itemToDo);
        itemToDo.click(function () {
            var text = this.text;
            //weatherCall(text);
            //getForecast(text);
        })
    }
}

$("#searchBtn").click(searchFavCity);

// store cities searched
function storeCitiesSearched() {
    localStorage.setItem("cityStorage", JSON.stringify(cities));
}
var cities = JSON.parse(localStorage.getItem("cityStorage")) || [];

function weatherCall() {

    //console.log("get the weather!")
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=cityName&appid=8d27861de0e9d9289a864a13d6ed84d0"
    )
        .then(function (response) {
            return response.json();
        })
    then(function (response) {
        var searchCity = response.querySelector[0].title;
        //display
        var responseHeaderEl = document.quarySelector("#")
        responseContainerEl.innerHTML = "<h2>" + searchCity + "</h2>";
    })

    return fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + searchCity
        //Madison
        + "&appid="
        //8d27861de0e9d9289a864a13d6ed84d0
        + apiKeys
        + "units=imperial"
    )
}
//     //clear our celection
//     $(".weatherResponse").html("");
//    

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
//     }
// }
// start();
