import React, {useState} from 'react';
import {View, StyleSheet, Platform, Button, Alert, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import uuid from 'uuid-random';

import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

function App() {
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
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )} />
      <Button title='Quote of the Day' onPress={() => Alert.alert('Just DoIt!!!')} />
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
    }
  
});

export default App;