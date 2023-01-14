import { View } from "react-native";
import Detail from "../components/SportDetails";

const Details = ({ route }) => {
  return (
    <View>
      <Detail
        title={route.params.itemTitle}
        description={route.params.itemDescription}
        image={route.params.itemImage}
      />
    </View>
  );
};

export default Details;
