import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import Detail from '../components/SportDetails';

const Details = ({navigation, route}) =>{


    return (
        <View>
            <Detail 
            title={route.params.itemTitle}
            description={route.params.itemDescription}
            image={route.params.itemImage}
            />
        </View>
    );

}

export default Details;