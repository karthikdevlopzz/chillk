const apiKey = '33bfbea41d5f427425cc218ba8a3859c'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;
    window.alert("manishi antene manchodu ra");
    if (!city) {
        document.getElementById('weather').innerHTML = 'Please enter a city name.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === '404') {
            document.getElementById('weather').innerHTML = 'City not found.';
        } else {
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
    
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = 'Error fetching data.';
    }
}
