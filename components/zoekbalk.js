import { StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const Zoekbalk = ({data, input, setInput, navigation}) => {

    const [pressCounter, setPressCounter]= useState(0);

    function pressHandler() {
        setPressCounter((currentPressCounter) =>  currentPressCounter+1);
    }

    return (
        <View>
            <View style={styles.mand}><Image style={styles.pic} source={require("../assets/6011.png")}></Image></View>
            <Text style={styles.aantal}>{pressCounter}</Text>
        
        
        <FlatList data={data} 
        ListFooterComponent={<View style={{height:370}}></View>} 
        renderItem={({item})=>{
            
                
            
            if(input===""){
                console.log("bert");
                return(
                    
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
                            <Pressable style={styles.btn} onPress={()=>navigation.navigate("Details", {itemTitle: item.title.rendered, itemDescription:item.rttpg_excerpt, itemImage: item.yoast_head_json.og_image[0].url})}>
                                <Text>Details</Text>
                            </Pressable>
                            <TouchableOpacity activeOpacity={0.4} onPress={pressHandler}><Text style={styles.btn}>Koop ticket</Text></TouchableOpacity>
                        </View>
                    </View>
                )
            }
            
            if(item.title.rendered.toLowerCase().includes(input.toLowerCase())){
                console.log(input);
                return(
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
                            <Pressable style={styles.btn} onPress={()=>navigation.navigate("Details", {itemTitle: item.title.rendered, itemDescription:item.rttpg_excerpt, itemImage: item.yoast_head_json.og_image[0].url})}>
                                <Text>Details</Text>
                            </Pressable>
                            <TouchableOpacity activeOpacity={0.4} onPress={pressHandler}><Text style={styles.btn}>Koop ticket</Text></TouchableOpacity>
                        </View>
                    </View>
                )
                
            }
        }}>

        </FlatList>
        </View>
    )
    
            
}

export default Zoekbalk

const styles = StyleSheet.create({

    mand:{
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingRight:40,
        paddingTop:15,
        marginBottom:20,
        
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
        marginTop: 10,
        marginLeft:30,
        marginRight:30,
        marginBottom:20,
        paddingTop:30,
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
})