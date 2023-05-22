import axios from 'axios';

const API_KEY = 'd091d6953cacd81827be703735e12975';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY_1 = '9yVW7wiUZuHnPKKqp1g+Fw==Yo8MqY45d3zoqSoC';



const WeatherService = {
  getWeatherData: async (latitude, longitude) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getWeatherDataByCity: async(city) => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${city}&country=India`, {
        headers: {
          'X-Api-Key': API_KEY_1,
        },
      });
       const longitude = response.data[0].longitude;
       const latitude = response.data[0].latitude;
       const WeatherReport = await axios.get(`${API_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
       return WeatherReport.data.list;
    } catch (error) {
      console.error(error);
    }
  }
};

export default WeatherService;

