const lat= '1.9'
const long ='30.06'

const weatherAPI = {
    async fetchMyweather() {
        //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
        const url =`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const icon = `https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964`;

            const data = {
                temperature: jsonResponse.main.temp,
                description: jsonResponse.weather[0].description,
                icon: icon,
            }
            return data
        }
        else {
            throw new Error('failed!')
        }

    }
}

export default weatherAPI;