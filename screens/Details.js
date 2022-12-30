import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import Detail from '../components/SportDetails';

const Details = ({navigation, route}) =>{


    return (
        <View>
            <Detail 
            title={route.params.itemTitle}
            description={route.params.itemDescription}

            />
        </View>
    );

}

export default Details;