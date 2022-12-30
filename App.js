import{NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sport from './screens/Sport';
import Details from './screens/Details';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sport" component={Sport}/>  
        <Stack.Screen name="Details" component={Details}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}



