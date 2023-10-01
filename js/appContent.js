import { capitalizeFirstLetter, directionOfWind } from "./helper.js";

export const createContent = (data) =>{
    const main =document.createElement('main');
    const section =document.createElement('section');
    const container =document.createElement('div');
    const inner =document.createElement('div');
    const iconBlock =document.createElement('img');
    const temterature =document.createElement('h2');
    const units =document.createElement('span');
    const description =document.createElement('p');
    const weatherInfo =document.createElement('div');
    const weatherInfoList =document.createElement('ul');
    const weatherInfoWind =document.createElement('li');
    const weatherInfoPressure =document.createElement('li');
    const weatherInfoHumidity =document.createElement('li');
    const weatherInfoClouds =document.createElement('li');

    section.classList.add('weather');
    container.classList.add('container','weather__container');
    inner.classList.add('weather__inner');
    iconBlock.classList.add('weather__icon');
    temterature.classList.add('weather__temperature');
    units.classList.add('weather__units');
    description.classList.add('weather__description');
    weatherInfo.classList.add('weather-info');
    weatherInfoList.classList.add('weather-info__list');
    weatherInfoWind.classList.add('weather-info__item');
    weatherInfoHumidity.classList.add('weather-info__item');
    weatherInfoPressure.classList.add('weather-info__item');
    weatherInfoClouds.classList.add('weather-info__item');

    temterature.textContent = Math.floor(data.main.temp); //получаем значение температуры из объекта
    description.textContent = capitalizeFirstLetter(data.weather[0].description);
    iconBlock.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; //массив weather
    units.textContent = 'o';

    const createWheatherItemTitle = (text) =>{
        const span = document.createElement('span');
        span.textContent = text;

        return span;
    }

    const createWheatherItemContent = (text) =>{
        const p = document.createElement('p');
        p.textContent = text;

        return p;
    }

    weatherInfoWind.append(
        createWheatherItemTitle('Ветер'),
        createWheatherItemContent(data.wind.speed + ' м/c, ' + directionOfWind(data.wind.deg))
    );

    weatherInfoPressure.append(
        createWheatherItemTitle('Давление'),
        createWheatherItemContent(data.main.pressure + ' мм.рт.ст')
    );

    weatherInfoHumidity.append(
        createWheatherItemTitle('Влажность'),
        createWheatherItemContent(data.main.humidity + ' %')
    );

    weatherInfoClouds.append(
        createWheatherItemTitle('Облачность '),
        createWheatherItemContent(data.clouds.all + ' %')
    );

    main.append(section)
    section.append(container)
    container.append(inner,description,weatherInfo);
    inner.append(iconBlock,temterature,units);
    weatherInfo.append(weatherInfoList);
    weatherInfoList.append(
        weatherInfoWind,
        weatherInfoPressure,
        weatherInfoHumidity,
        weatherInfoClouds
    );

    return main;
}