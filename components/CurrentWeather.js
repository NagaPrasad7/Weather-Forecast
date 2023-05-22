import React from 'react';
import { StyleSheet, Text, SafeAreaView, ActivityIndicator} from 'react-native';


const CurrentWeather = ({currentWeather}) => {
    return (
      <SafeAreaView>
        {currentWeather ? (
          <SafeAreaView>
            <Text style={styles.text}>Location: {currentWeather.name}</Text>
            <Text style = {styles.text1}>{(currentWeather.main.temp-273.15).toFixed(2)}°C</Text>
            <Text style = {styles.text2}>Minimum Temperature: {(currentWeather.main.temp_min-273.15).toFixed(2)} °C</Text>
            <Text style = {styles.text2}>Maximum Temperature:  {(currentWeather.main.temp_max-273.15).toFixed(2)} °C</Text>
            <Text style = {styles.text2}>Pressure:  {(currentWeather.main.pressure)} hPa</Text>
            <Text style = {styles.text2}>Humidity:  {(currentWeather.main.humidity)} %</Text>
          </SafeAreaView>
        ) : (
          <ActivityIndicator size = "large" color = "#005266"/>
        )}
      </SafeAreaView>
      
    )
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      marginBottom: 20,
      marginTop: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    text1: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text2: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  export default CurrentWeather;