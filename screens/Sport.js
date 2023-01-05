import React, {useState, useEffect} from 'react';
import {Text, View, Image, TextInput, Pressable, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Zoekbalk from '../components/zoekbalk';



const Sport = ({navigation}) =>{

    const [Sport, setSport] = useState ([]);

    const getSport = async () => {
        try {
            const response = await fetch ("http://quinttadam.be/wp-json/wp/v2/posts?categories=5", {

            })
            const json = await response.json();
            setSport(json);
            console.log(Sport)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSport();
    }, []);

  const [input, setInput]= useState("");
  console.log(input);

    return (
        <View style={styles.bg}>
            <View >
                <TextInput
                    value={input}
                    placeholder="Search sport"
                    onChangeText={(text)=> setInput(text)}
                    style={styles.inputveld}
                />

            </View>
            <Zoekbalk 
                data={Sport}
                input={input}
                setInput={setInput}
                navigation={navigation}
            />
            
        </View>
    );


}
const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#A9DAFF',
        // paddingBottom:,
    },
    inputveld:{
        position:'absolute',
        left:30,
        top:15,
        fontSize:18,
        borderWidth:1,
        padding:10,
        paddingRight:150,
        backgroundColor:"#E2F3FF"
    }
  });

export default Sport;