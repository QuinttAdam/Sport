import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Beginscherm from "./screens/Beginscherm";
import Sport from "./screens/Sport";
import Details from "./screens/Details";
import FavSports from "./screens/FavSports";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beginscherm" component={Beginscherm} />
        <Stack.Screen name="Sport" component={Sport} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Favourite Sports" component={FavSports} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}