import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing,Image,TouchableOpacity } from 'react-native';
import { View, BackHandler,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Logo from '../assets/logo.png'

const Choice = () => {

  const navegar = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))
  const size = Dimensions.get('window').width
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    })
  
  return (
    <View style={styles.container}>
        <Image
            delay={500}
            animation="flipInX"
            source={require('../assets/logo.png')}
            style={styles.containerLogo}
            resizeMode="contain"
        />
        
        <TouchableOpacity style={styles.button1} onPress={()=>{navegar.navigate('Login')}}>
                    <Text style={styles.buttonText}>Começar agora!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>{navegar.navigate('Register')}}>
                    <Text style={styles.buttonText2}> Fazer o login</Text>
        </TouchableOpacity>

    </View>

  );
}

export default Choice;
