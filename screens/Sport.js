import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList, StyleSheet} from 'react-native';


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

    return (
        <View >
            <FlatList data ={Sport} renderItem={({item}) => (
                
                <View style={styles.container}>
                    
                <View style={styles.sporttitle}>
                    <View>
                        {item.yoast_head_json?.og_image !== undefined && <Image
                        style={{ width: 300, height: 200 }}
                        source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                        />
                        }
                    </View>
                    <Text style={styles.title}>{item.title.rendered}</Text>
                    {/* <Text>{item.rttpg_excerpt}</Text> */}
                    

                    
                </View>
                    <Pressable style={styles.btn} onPress={()=>navigation.navigate("Details", {itemTitle: item.title.rendered, itemDescription:item.rttpg_excerpt})}>
                        <Text>Details</Text>
                    </Pressable>
                </View>
            )}>
            </FlatList>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 30,
        marginBottom:-15,
        paddingTop: 30,
        
    },
    title:{
        backgroundColor:"#fff",
        fontSize:18,
        margin:10,
        
    },
    sporttitle:{
        flexDirections: "column",
        flexWrap: "wrap",
        alignItems: 'center',
    },
    btn:{
        borderWidth: 1,
        borderBottomColor: "black",
        borderRadius: 10,
        padding:5,
        marginBottom: 20
    },
  });

export default Sport;