import React, {useState, useEffect} from 'react';
import {Text, View, Image, TextInput, Pressable, FlatList, StyleSheet, TouchableOpacity} from 'react-native';




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

    const [pressCounter, setPressCounter]= useState(0);

    function pressHandler() {
    setPressCounter((currentPressCounter) =>  currentPressCounter+1);

  }
    return (
        <View style={styles.bg}>
            <View >
                <View style={styles.mand}><Image style={styles.pic} source={require("../assets/6011.png")}></Image></View>
                <Text style={styles.aantal}>{pressCounter}</Text>
            </View>
            <FlatList data ={Sport} renderItem={({item}) => (
                
                <View style={styles.container}>
                    
                <View style={styles.sporttitle}>
                    <View >
                        {item.yoast_head_json?.og_image !== undefined && <Image
                        style={{ width: 300, height: 200, borderRadius:5 }}
                        source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                        />
                        }
                    </View>
                    <Text style={styles.title}>{item.title.rendered}</Text>
                    
                    

                    
                </View >
                    <View style={styles.btns}>
                        <Pressable style={styles.btn} onPress={()=>navigation.navigate("Details", {itemTitle: item.title.rendered, itemDescription:item.rttpg_excerpt})}>
                            <Text>Details</Text>
                        </Pressable>
                        <TouchableOpacity activeOpacity={0.4} onPress={pressHandler}><Text style={styles.btn}>Koop ticket</Text></TouchableOpacity>
                    </View>
                </View>
            )}>
            </FlatList>
        </View>
    );


}
const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#A9DAFF',
    },
    mand:{
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingRight:40,
        paddingTop:15,
        
    },
    pic:{
        width:40,
        height:40,
        
    },
    aantal:{
        position:'absolute',
        right: 30,
        top:50,
        fontSize: 18,
    },
    container: {
        backgroundColor: '#E2F3FF',
        margin: 30,
        marginBottom:-15,
        paddingTop: 30,
        borderRadius: 8,
    },
    title:{
        fontSize:18,
        margin:10,
        
    },
    sporttitle:{
        alignItems: 'center',
    },
    
    btn:{
        borderWidth: 1,
        borderBottomColor: "black",
        borderRadius: 5,
        padding:5,
        marginBottom: 20,
        
    },
    
    btns:{
        marginTop: 10,
        flex:1,
        flexDirection:"row",
        justifyContent:'space-evenly',
        
    }
  });

export default Sport;