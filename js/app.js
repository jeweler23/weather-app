import { getWeatherData } from "./api.js"
import { createHeader } from "./appHeader.js";
import { createContent } from "./appContent.js"

const app = async() => {
    const weather = await getWeatherData('Москва');
    const header = createHeader(weather.name); //в объектре weather храниться ключ name
    const content = createContent(weather);
    document.body.append(header,content);

    console.log(weather)
}

app()