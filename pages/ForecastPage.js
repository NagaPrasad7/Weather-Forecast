import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';


const ForecastPage = ({ forecastData }) => {

  return (
    <ScrollView>
      <Card>
        {forecastData.map((data, index) => (
          <View key={index}>
            <Text style={styles.text}>
              {data.dt_txt}        {(data.main.temp - 273.15).toFixed(2)}°C
            </Text>
            <Card.Divider />
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ForecastPage;
