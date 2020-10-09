

var weather;
//get API, keys
var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=Madison&appid=8d27861de0e9d9289a864a13d6ed84d0";
//var city = "";
var keys = "8d27861de0e9d9289a864a13d6ed84d0";

function start() {
    var button = onclick("#submit");
    button.onclick(weatherCall);

    input = select("cityName");

}
