import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, FlatList } from 'react-native';

const History = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://192.168.0.109:5000/exercises')
            .then((response) => response.json())
            .then((json) => setData(json) )
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList style={styles.list}
                          data={data}
                          keyExtractor={({ id }, index) => id}
                          renderItem={({ item }) => (
                              <Text style={styles.text}>{item.name}, {item.description}</Text>
                          )}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    list: {
        backgroundColor: "dodgerblue",
        borderRadius: 30,
        width: '100%',
        height: '30%',
        padding: 5,
        margin: 5,
    }
});

export default History;