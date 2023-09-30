import { getWeatherData } from "./api.js"
import { createHeader } from "./appHeader.js";

const app = async() => {
    const weather = await getWeatherData('Москва');
    const header = createHeader(weather.name); //в объектре weather храниться ключ name
    document.body.append(header);
    console.log(weather)
}

app()