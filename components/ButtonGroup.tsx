import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Colors from '@/colors/colors'

const ButtonGroup = ({ buttons, selectedIndex = 0, onSelect }) => {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                keyExtractor={(item, index) => index.toString()}
                data={buttons}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => onSelect(index)}
                        style={index === selectedIndex ? styles.selected_item : styles.item}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    }, item: {
        margin: 4,
        backgroundColor: 'white',
       
        borderRadius: 8,
        borderColor: 'gray',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
    }, selected_item: {
        margin: 4,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        borderColor: Colors.main_color,
        borderWidth: 2,
    }
});

export default ButtonGroup