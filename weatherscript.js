// GIVEN a weather dashboard with form inputs
// WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city

//var calendar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//var cities = [];
var responseContainerEl = document.querySelector("#weatherCall");
var fiveDayForecast = document.querySelector("#fiveDayContainer");
//fuction to input city
function searchFavCity() {
    console.log("show");
    var searchCity = document.querySelector("#searchCity").value;
    weatherCall(searchCity);
    storeFavCity(searchCity);
    //condition if no input
    if (searchCity) {
        getForecast(searchCity);
        storeFavCity(searchCity);
    }
    else {
        alert("Select a City");
    }
}

// store cities searched
function storeFavCity(searchCity) {
    console.log("city");

    //var buttonEl =document.querySelector("#searchCity");
    var listOfCities = document.createElement("li");
    listOfCities.classList.add("list-group-item", "list-group-item-action");
    var string = searchCity;
    listOfCities.textContent = string;
    var storedCities = document.querySelector(".storedFavCity");
    //console.log(event.this)
    storedCities.onclick = function () {
        // console.log(event.this.city)
        if (event.this.city == "li") {
            weatherCall(event.this.textContent);
        }
    }
    storedCities.appendChild(listOfCities);
};
// module4 info:
// var buttonEl = document.querySelector("#save-task");
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// var createTaskHandler = function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// };

//buttonEl.addEventListener("click", createTaskHandler);


// // loop
// for (var i = 0; i < searchCity.length; i++) {
//     //buttons for each city in the array
//     var listOfCities = $("<button>");
//     //class
//     listOfCities.addClass("btn");
//     listOfCities.attr("searchCity", searchCity[i]);
//     listOfCities.text(searchCity[i]);
//     // add button
//     $("#list-group").append(listOfCities);
// }

// //click the button on city name
// $("#searchBtn").on("click", function (event) {
//     event.preventDefault();
//     console.log("test");
//     //add entered input
//     console.log($("#searchCity"));
//     var searchCity = $("#searchCity").val().trim();
//     //add city to array
//     cities.push(searchCity);
//     //conditional for once pick the city show the weather for it?
// })

//storeFavCity();
//$(document).on("click", ".searchBtn", searchFavCity);
//document.querySelector("#searchBtn").addEventListener("click", searchFavCity);
// var cities = JSON.parse(localStorage.getItem("cityStorage")) || [];

//function for weather for today
function weatherCall(searchCity) {

    console.log("get the weather!")
    fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q="
        + searchCity
        + "&appid=b76c30386bab576d023d70f50d7d35cb"
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // var searchCity = response.querySelector[0].title;
            //display
            var temperature = response.list[i].main.temp//main.humidity//
            var dateYYYYMMDDHH = response.list[i].dt - text
            //var calendar = moment(dateYYYYMMDDHH).format("dddd, MMMM Do YYYY, h:mm:ss a")
            var humidity = response.list[i].weather[0].main
            var emoji = response.list[i].weather[0].main

            responseContainerEl.innerHTML = "<h2>" + searchCity + "</h2>";
            //fiveDayForecast.innerHTML = "";
            fiveDayForecast.innerHTML = "<h3 class=\"mt-3\">5-Day Forecast:</h3>";
            fiveDayForecastRow = document.createElement("div");
            fiveDayForecastRow.name = "\"row\"";
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
            getForecast(searchCity);
        })

}
//weather forecast
function getForecast(searchCity) {
    console.log(searchCity);
    //fetch request
    fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q="
        + searchCity
        + "&appid=b76c30386bab576d023d70f50d7d35cb"
    )
        //convert the response to JSON
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log("getForecast", response);

            // fiveDayForecast.innerHTML = "<h3 class=\"mt-3\">5-Day Forecast:</h3>";
            // fiveDayForecastRow = document.createElement("div");
            // fiveDayForecastRow.name = "\"row\"";
            //loop
            for (var i = 0; i < response.list.length; i += 5) {
                var temperature = response.list[i].main.temp//main.humidity//
                var dateYYYYMMDDHH = response.list[i].dt - text
                var calendar = moment(dateYYYYMMDDHH).format("dddd, MMMM Do YYYY, h:mm:ss a")
                //    var humidity = response.list[i].weather[0].main
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
                } else if (emoji == "Clear") { emoji = "☀️" }
                responseContainerEl.innerHTML = "";
            }
        })
}
//fiveDayForecast.appendChild()
document.querySelector("#searchBtn").addEventListener("click", searchFavCity);

storeFavCity();