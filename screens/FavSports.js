import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const FavSports=({navigation})=>{

    let sports=[]
    const [enteredSport, setEnteredSport]= useState('');
    const [Sports, setSports]= useState(sports);

    const SportNameHandler = (enteredText) => {
        // console.log(enteredText)
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
// console.log(enteredSport)

    
    

    return(
        <View>
            <TextInput 
            placeholder="Add sport"
             onChangeText={SportNameHandler}/> 
             <TextInput 
            placeholder="Add description"
             onChangeText={SportDescriptionHandler}/> 


             <Pressable title="ADD" onPress={addSportHandler}><Text>Toevoegen</Text></Pressable>
             <FlatList 
             style={{height:720}}
                data={Sports}
                renderItem={({item}) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                </View>
                 )}>

             </FlatList>
        </View>
    )

}


const styles = StyleSheet.create({

})





export default FavSports;