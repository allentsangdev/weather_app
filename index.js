//let city = document.getElementById("search-bar").innerHTML
let weather = {
    apiKey:"fc723497320b0e9710b5c3548363a662",
    fetchWeather:function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather:function(data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerHTML = "Weather in " +  name
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png"
        document.querySelector(".temp").innerHTML = temp + "°C"
        document.querySelector(".description").innerHTML = description
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/3840x2160/?"+name+"')";
    },
    search:function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector("#search-btn").addEventListener("click", function(){
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        weather.search()
    }   
})

