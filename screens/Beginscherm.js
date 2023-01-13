import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, Image, TextInput, Pressable, FlatList} from 'react-native';


const Beginscherm = ({navigation}) =>{


    return (
        <ScrollView>
            <Text>Hi</Text>
            <Pressable onPress={()=>navigation.navigate("Sport")}>
                <Text>Agree</Text>
            </Pressable>
        </ScrollView>
    );

}

export default Beginscherm;