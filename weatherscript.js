
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city

function getForecast(searchCity) {

    //fetch request for Madison or city
    var apiKeys = "8d27861de0e9d9289a864a13d6ed84d0";
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
//     )
// var weather;
// function start() {
//     var button = onclick("#submit");
//     button.onclick(weatherCall);

//     input = select("cityName");

// }

// function weatherCall() {
//     var url = apiCall + input.value() + keys

//     loadJSON(url, gotData);
// }

// function gotData(data) {
//     weather = data;
// }

// function getWeather() {
//     //console.log("get the weather!")
//     //clear our celection
//     $(".weatherResponse").html("");
//     //get the city names
//     var cityName = $("cityName").value;
//     var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8d27861de0e9d9289a864a13d6ed84d0";

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
