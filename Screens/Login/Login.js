import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from 'react-native';

import FirstScreen from './screens/FirstScreen';
import Otpscreen from './screens/Otpscreen';
import SecondScreen from './screens/SecontSreen';

const Stack = createNativeStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator initialRouteName="first">
      <Stack.Screen
        name="first"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="second"
        component={SecondScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otpscreen"
        component={Otpscreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
