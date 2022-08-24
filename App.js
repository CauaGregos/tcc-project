import React from 'react';
import Routes from './src/routes/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#202020' style="light"  />
      <Routes />
    </NavigationContainer>
  );
}







