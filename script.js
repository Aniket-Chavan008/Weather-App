
const city = document.getElementById("search");
const search_button = document.querySelector(".search_button");
search_button.addEventListener('click',()=>{
    fetch_WeatherData(city.value);
});
const fetch_WeatherData = async (city) =>
    {
        try{
            const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f57757d9e421936edd066ba9acaadc9a&units=metric`
            const response = await fetch(weather_url);
            const data = await response.json();
            update_data(data.main.temp, data.name, data.main.humidity, data.wind.speed, data.main.feels_like, data.weather[0].main);
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
const update_data = (temp, city, humidity, wind, feelslike, weather_icon)=>
    {
             let weather_img = document.querySelector('.icon');
             document.querySelector(".temp").textContent = Math.round(temp) + "°C";
             document.querySelector('.city').textContent = city;
             document.querySelector('.humidity').textContent = humidity + "%";
             document.querySelector('.wind').textContent = wind + "km/h"
             document.querySelector('.fl').textContent = feelslike + "°C";
             if(weather_icon === "Clouds")
             {
                weather_img.src= "weather images/clouds.png";
             }
             if(weather_icon === "Clear")
             {
                weather_img.src= "weather images/clear.png";
             }
             if(weather_icon === "Rain")
             {
                weather_img.src= "weather images/rain.png";
             }
             if(weather_icon === "Snow")
             {
                weather_img.src= "weather images/snow.png";
             }
             if(weather_icon === "Drizzle")
             {
                weather_img.src= "weather images/drizzle.png";
             }
            if(weather_icon === "Mist")
             {
                weather_img.src= "weather images/mist.png";
             }
    }