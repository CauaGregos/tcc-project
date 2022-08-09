import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Singin from '../pages/SignIn';
import { StatusBar } from 'expo-status-bar';
import Register from '../pages/Register';
import Home from '../pages/Home';
import WaitConfirm from '../pages/waitConfirm';
import InfoForgot from '../pages/InfoForgot';
import ForgotAcsses from '../pages/ForgotAcsses';
const Stack = createNativeStackNavigator();


function Routes() {
  return (
   
    <NavigationContainer>
      <StatusBar backgroundColor='#202020'/>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="WaitConfirm" component={WaitConfirm} options={{headerShown: false}} />
        <Stack.Screen name="Singin" component={Singin} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="ForgotAcsses" component={ForgotAcsses} options={{headerShown: false}} />
        <Stack.Screen name="InfoForgot" component={InfoForgot} options={{headerShown: false}} />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

export default Routes;