import { getWeatherData } from "./api.js"
import { createHeader } from "./appHeader.js";
import { createContent } from "./appContent.js"
import { handleWeatherByGeolocation } from "./geolocation.js"

const app = async() => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва');
    const header = createHeader(weather.name); //в объектре weather храниться ключ name
    const content = createContent(weather);
    document.body.append(header,content);
}

app()