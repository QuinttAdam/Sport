import { StyleSheet, Text, View, Image } from "react-native";

const Detail = (props) => {
  return (
    <View style={styles.bg}>
      <Image
        style={{ width: 300, height: 200, borderRadius: 5 }}
        source={{ uri: `${props.image}` }}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#E2F3FF",
    padding: 50,
    paddingBottom: 500,
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
  },
});
export default Detail;
