import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Pressable,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

const Beginscherm = ({ navigation }) => {
  const showAlert = () =>
    Alert.alert(
      "Let op!",
      "Je moet Cookies accepteren om mijn app te gebruiken."
    );

  return (
    <ScrollView style={styles.bg}>
      <Text style={styles.title}>Cookies</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/cookie.png")}
        ></Image>
      </View>
      <Text style={styles.p1}>
        We gebruiken cookies en soortgelijke tools om uw winkelervaring te
        verbeteren, onze services aan te bieden, te begrijpen hoe klanten onze
        services gebruiken, zodat we deze kunnen verbeteren, en advertenties
        weer te geven, inclusief op interesses gebaseerde advertenties.{" "}
      </Text>
      <Text style={styles.p2}>
        Goedgekeurde derden gebruiken deze tools om onze advertenties weer te
        geven.
      </Text>
      <Text style={styles.p3}>
        {" "}
        Als u niet alle cookies wilt accepteren, kunt u deze applicatie niet
        gebruiken.
      </Text>
      <View style={styles.button}>
        <Pressable onPress={showAlert}>
          <Text style={styles.btn}>Don't accept</Text>
        </Pressable>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => navigation.navigate("Sport")}
        >
          <Text style={styles.btn}>Accept</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Beginscherm;
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#A9DAFF",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  imgContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  p1: {
    fontSize: 24,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  p2: {
    fontSize: 24,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  p3: {
    fontSize: 24,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 40,
  },
  btn: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    backgroundColor: "#E2F3FF",
  },
  button: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
});
