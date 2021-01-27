import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let count = 0;
const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => {
      setText(textValue)
  };
    useEffect(() => {
        // POST request using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: text,description: 'Description'})
        };
        fetch('http://192.168.0.109:5000/exercises', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    }, [count]);

  return (
    <View>
      <TextInput
        placeholder="Add Exercise..."
        style={styles.input}
        onChangeText={onChange}
               />
      <TouchableOpacity style={styles.btn} onPress={() => {
        addItem(text);
        count++
        console.log(count)
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Exercise
          </Text>

      </TouchableOpacity>
</View>
    );
};

  const styles = StyleSheet.create({
    input: {
      height: 60,
      padding: 8,
      fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin:5,
  },
  btnText: {
    fontSize: 20,
    color: 'darkslateblue',
    textAlign: 'center',
  },
  
});

export default AddItem;