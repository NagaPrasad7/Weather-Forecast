import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import WeatherService from '../services/WeatherService';
import SearchBar from '../components/SearchBar';
import ForecastPage from './ForecastPage';
import CurrentWeather from '../components/CurrentWeather';

const HomePage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    setToggle(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      getWeatherData(latitude, longitude);
    } catch (error) {
      console.log('Error getting current location:', error);
    }
  };

  const getWeatherData = async (latitude, longitude) => {
    try {
      const data = await WeatherService.getWeatherData(latitude, longitude);
      setCurrentWeather(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  const handleSearch1 = async (city) => {
    try {
      setLoading(true);
      const data = await WeatherService.getWeatherDataByCity(city);
      setForecastData(data);
      setToggle(false);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  

  return (
    
    <View>
      <SearchBar onSearch={handleSearch1} />
      <View>
      <TouchableOpacity style={styles.button} onPress={()=>getCurrentLocation()}>
        <Text style={styles.buttonText}>Current weather</Text>
      </TouchableOpacity>
      </View>
      {loading ? <ActivityIndicator size = "large" color = "#005266"/> :
      <View>
      { toggle ? <CurrentWeather currentWeather= {currentWeather}/> : 
        <ForecastPage forecastData= {forecastData}/>
      }
      </View>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#005266',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
