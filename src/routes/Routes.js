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
import SplashForgot from '../pages/SplashForgotAsses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../pages/Settings';
// Familia de icones da lib vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Splash from '../pages/Splash';
import Profile from '../pages/Profile/profile';

// tipos de navigations
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//minha navegacao por tabs
// consigo receber as props, se eu chamar e passar elas
function TabNav(props) {
 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#202020',
          borderTopWidth: 0,
          borderRadius: 10,
          position: 'absolute',
          left: 3,
          right: 3,
          bottom: 3
        }
      }}
    >
      {/*Aqui passo minhas props para o componente home no initialParams*/}
      <Tab.Screen name="Home" initialParams={{ nome: props.route.params?.nome }} component={Home}
        options={{
          headerShown: false,
          // Configuração dos icones que aparecem na tabBar
          tabBarIcon: ({ color, size, focused }) => {
           return focused ? <Icon name="rocket" size={30} color="#6b6080" /> : <Icon name="rocket" size={30} color="#525252" />
          }
        }} />

      <Tab.Screen name="Settings" component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
           return focused ? <FontAwesome5 name="user" size={30} color="#6b6080" /> : <FontAwesome5 name="user" size={30} color="#525252" />;
          }
        }} />
    </Tab.Navigator>
    
  );
}

function Routes() {
  // Aqui esta a navegacao estatica 
  return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" initialParams={{screen:'Welcome'}} component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="WaitConfirm" component={WaitConfirm} options={{headerShown: false}} />
        <Stack.Screen name="Singin" component={Singin} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={TabNav} options={{headerShown: false}} />
        <Stack.Screen name="ForgotAcsses" component={ForgotAcsses} options={{headerShown: false}} />
        <Stack.Screen name="InfoForgot" component={InfoForgot} options={{headerShown: false}} />
        <Stack.Screen name="SplashForgot" initialParams={{screen:'InfoForgot'}} component={SplashForgot} options={{headerShown: false}} />
        <Stack.Screen name="Profile" initialParams={{screen:'Welcome'}} component={Profile} options={{headerShown: false}} />
      </Stack.Navigator>
  );
}

export default Routes;