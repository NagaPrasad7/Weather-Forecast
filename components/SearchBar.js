import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';


const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter City Name"
          onChangeText={text => setCity(text)}
          value={city}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
  
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#005266',
    borderWidth: 2,
    padding: 10,
    borderRadius: 40,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#005266',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SearchBar;