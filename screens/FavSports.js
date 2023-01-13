import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const FavSports=({navigation})=>{

    let sports=[]
    const [enteredSport, setEnteredSport]= useState('');

    const [Sports, setSports]= useState(sports);
    const SportNameHandler = (enteredText) => {
        setEnteredSport(enteredText);
    }

    const [enteredDescription, setEnteredDescription]= useState('');
    const SportDescriptionHandler = (enteredText) => {
        setEnteredDescription(enteredText);
    }
    
    const addSportHandler = () => {
        let newSport = { name: enteredSport, description: enteredDescription };
    
        let modifiedObj = {
          name: newSport.name,
          description: newSport.description,
        };
    
        setSports((sports) => [...sports, modifiedObj]);
      };


    
    

    return(
        <View  style={styles.container}>
            <Text style={styles.h1}>Maak jouw eigen lijst van favoriete sporten</Text>
            <TextInput 
             style={styles.inputs}
             placeholder="Add sport"
             onChangeText={SportNameHandler}/> 
             
             <TextInput 
             style={styles.inputs2}
             placeholder="Add description"
             onChangeText={SportDescriptionHandler}
             multiline
             
             /> 


             <Pressable style={styles.btn} title="ADD" onPress={addSportHandler}><Text style={styles.toevoegen}>Toevoegen</Text></Pressable>
             <Text style={styles.h2}>Dit is je lijst</Text>
             <FlatList 
             style={{height:460}}
                data={Sports}
                renderItem={({item}) => (
                <View style={styles.list}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                </View>
                 )}>

             </FlatList>
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
       backgroundColor:"#A9DAFF",

    },
    h1:{
        fontSize:18,
        marginLeft:30,
        marginTop:20,
        fontWeight:'bold',
    },
    h2:{
        fontSize:24,
        marginLeft:30,
        marginTop:20,
        fontWeight:'bold',
        alignItems:'center',
        paddingBottom:10,
    },
    inputs:{
        borderWidth:1,
        padding:5,
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        backgroundColor:"#E2F3FF",
        fontSize:20,
    },
    inputs2:{
        borderWidth:1,
        padding:5,
        paddingBottom:80,
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        backgroundColor:"#E2F3FF",
    },
    btn:{
        backgroundColor:"#E2F3FF",
        borderWidth:1,
        marginLeft:150,
        marginRight:150,
        marginBottom:10,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        marginTop:20,
        borderRadius:20,
        
    },
    toevoegen:{
        fontWeight:'bold',
    },
    list:{

        backgroundColor:"#1c2d86",
        marginLeft:30,
        marginRight:30,
        marginBottom:20,
        marginTop:5,
        borderRadius:5,
        borderWidth:3,
        borderColor:"#E2F3FF",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
    
    },
    name:{
        color:"#E2F3FF",
        fontSize:20,
    },
    desc:{
        paddingTop:5,
        color:"#E2F3FF",
    },

})





export default FavSports;