import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Button } from 'react-native';
import Header from './Components/Header';
import { StatusBar } from 'expo-status-bar';

const App = () => {
      const [count, setCount] = useState(0);

  return (
<View style={styles.container}>
  <Header title='Tasker' />  
      <Button onPress={setCount({ count+ 1})} title='clickMe'/>
</View>
    );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.CurrentHeight : 0,
    },
  
});

export default App;