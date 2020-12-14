import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, Platform, Button, Alert, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import uuid from 'uuid-random';

import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';
import * as Location from 'expo-location';


function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  const [items, setItems] = useState([
    { id: uuid(), text: 'Learn Django' },
    { id: uuid(), text: 'Learn Flutter' },
    { id: uuid(), text: 'Learn ReacNative' },
    { id: uuid(), text: 'Learn React' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter a task');

    } else {
    
    setItems(prevItems => {
      return [{ id: uuid(), text }, ...prevItems];
    });
    }
  };

  return (
    <View style={styles.container}>
      <Header title='Tasker' />
      <AddItem addItem={addItem} />
      
      <FlatList
        style={styles.list1}
        data={items}
        renderItem={({ item }) => (<ListItem item={item} deleteItem={deleteItem}/>
        )}
      />
      {isLoading ? <ActivityIndicator/> : (
        <FlatList style={styles.list} 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
      <Button title='Quote of the Day' onPress={() => {Alert.alert('Just DoIT!!!')}} />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.CurrentHeight : 0,
    },
    button: {
      fontSize: 12,
    },
    list: {
    backgroundColor: "dodgerblue",
      borderRadius: 30,
    width: '100%',
    height: '30%',
    padding: 5,
      margin: 5,
    },
    list1: {
     height:'70%', 
    },
    text: {
      color: '#141823',
    }
  
});

export default App;