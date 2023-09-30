export const getWeatherData = async(city) =>{ 
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2ee608dee57eca198bdcb4e3fb2c388&lang=ru`
        );
        return await response.json();
    } catch (error){
        console.error(error);
    }
}