hhhhh/
async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }
    const apiKey = "b3112dbfcc654e2a8fe182257250303";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather").innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>LocalTime: ${data.location.localtime}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon">
        `;
    } catch (error) {
        alert("Could not fetch weather data. Please try again.");
    }
}

