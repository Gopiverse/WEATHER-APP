const apiKey = "6113e3a2f34d55d54400cfd62f2a44b2";
// `https://api.openweathermap.org/data/2.5/weather?lat=${8.5048}&lon=${76.9407}&appid=${apiKey} `

$(document).ready(function() {
    $("button").click(function() {
        const city_name = $("#getCity").val();
        $.ajax({
            url : `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`,
            method: 'GET',
            success : function(res) {
                displayWeather(res);
                console.log(res);
            },
            error: function(err) {
                console.log(err);
                if (err.status == "404") {
                    alert("City name not found");
                }
            }
        });
    });
});


function displayWeather(res) {
    const displayDiv = $(".weather-details");
    const cname = $("#cityName");
    const temp = $("#temp");
    const des = $("#des");
    const humidity = $("#humidity");
    const windSpeed = $("#wind-speed");

   cname.text(res.name);
   temp.text(res.main.temp - 273.15);
   des.text(res.weather[0].description);
   humidity.text(res.main.humidity+"%");
   windSpeed.text(res.wind.speed+"m/s");
}

