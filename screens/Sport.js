import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Sport = ({ navigation }) => {
  const [Sport, setSport] = useState([]);

  const getSport = async () => {
    try {
      const response = await fetch(
        "http://quinttadam.be/wp-json/wp/v2/posts?categories=5",
        {}
      );
      const json = await response.json();
      setSport(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSport();
  }, []);

  const [input] = useState("");

  const [pressCounter, setPressCounter] = useState(0);

  function pressHandler() {
    setPressCounter((currentPressCounter) => currentPressCounter + 1);
  }
  const getSportByTitleSearch = async (enteredText) => {
    try {
      if (enteredText.length > 0) {
        const search = encodeURI(
          "https://quinttadam.be/wp-json/wp/v2/posts?categories=5&search=" +
            enteredText
        );
        const response = await fetch(search);
        const json = await response.json();
        setSport(json);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.bg}>
      <View style={styles.mand}>
        <Image
          style={styles.pic}
          source={require("../assets/6011.png")}
        ></Image>
      </View>
      <Text style={styles.aantal}>{pressCounter}</Text>

      <TextInput
        style={styles.inputveld}
        placeholder="Search sport"
        onChangeText={getSportByTitleSearch}
      />

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.fav}
        onPress={() => navigation.navigate("Favourite Sports")}
      >
        <Text style={styles.favtext}>Your favourite sports</Text>
      </TouchableOpacity>

      <FlatList
        data={Sport}
        ListFooterComponent={<View style={{ height: 280 }}></View>}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.sporttitle}>
              <View>
                {item.yoast_head_json?.og_image !== undefined && (
                  <Image
                    style={{ width: 300, height: 200, borderRadius: 5 }}
                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                  />
                )}
              </View>
              <Text style={styles.title}>{item.title.rendered}</Text>
            </View>
            <View style={styles.btns}>
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.btn}
                onPress={() =>
                  navigation.navigate("Details", {
                    itemTitle: item.title.rendered,
                    itemDescription: item.rttpg_excerpt,
                    itemImage: item.yoast_head_json.og_image[0].url,
                  })
                }
              >
                <Text>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} onPress={pressHandler}>
                <Text style={styles.btn}>Koop ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#A9DAFF",
  },
  inputveld: {
    marginRight: 30,
    marginLeft: 30,
    top: 15,
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#E2F3FF",
    borderRadius: 10,
  },
  mand: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    marginBottom: 15,
  },
  pic: {
    width: 40,
    height: 40,
  },
  aantal: {
    position: "absolute",
    right: 170,
    top: 40,
    fontSize: 18,
  },
  fav: {
    backgroundColor: "#E2F3FF",
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 20,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  favtext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#E2F3FF",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    paddingTop: 30,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    margin: 10,
  },
  sporttitle: {
    alignItems: "center",
  },

  btn: {
    borderWidth: 1,
    borderBottomColor: "black",
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },

  btns: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Sport;
