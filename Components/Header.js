import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
<View style={styles.header}>
<Text style={styles.text}>{props.title}</Text>
      
</View>
    );
};

  const styles = StyleSheet.create({
    header: {
      height: 65,
      padding: 15,
      backgroundColor: 'darkslateblue'
    },
    text: {
      color: '#fff',
      fontSize: 28,
      textAlign: 'center',

    }
  
});

export default Header;