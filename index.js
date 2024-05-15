function api() {
    const search = document.querySelector('#search-btn');
    search.addEventListener('click', () => {

        const input = document.querySelector('#input').value;
        let temp = document.getElementById('temp');
        let country = document.getElementById('city-name');
        let wind = document.getElementById('wind');
        let humidity = document.getElementById('humidity');
        fetch(`http://api.weatherapi.com/v1/current.json?key=01d326756aea402aa4c122534241004&q=${input}&aqi=no`).then((response) => {
            return response.json();
        }).then((resp) => {
            // temp
            const tempreture = resp.current.temp_c;
            temp.innerHTML = `${tempreture}°C`;
            // city name
            const city = resp.location.name ;
            country.innerHTML = `${city}` ;
            // wind
           wind.innerHTML = `${resp.current.wind_kph}KM/H` ;
           //humidity
           humidity.innerHTML = `${resp.current.humidity}%`;

           console.log(resp);

        }).catch((error) => {
            console.log(`err : ${error}`)
        })
    })
}

api()
