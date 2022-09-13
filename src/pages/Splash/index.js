import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing,Image } from 'react-native';
import { View, BackHandler } from 'react-native';
import styles from './style';
import Logo from '../assets/logo.png'

const Splash = () => {

  const navigate = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))
  const size = Dimensions.get('window').width
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    })
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start();
  }, [])
  return (
    <View style={styles.container}>
        <Image
            delay={500}
            animation="flipInX"
            source={require('../assets/logo.png')}
            style={styles.containerLogo}
            resizeMode="contain"
        />
      <LottieView style={{ width:size,height: 150, top: '-10%',left:size*0.15}}
        source={require('../assets/loopPlanet.json')}
        progress={animationProgress.current}
        onAnimationFinish={() =>  navigate.navigate('Choice')}
        loop={false}
        autoPlay
        
      />
    </View>

  );
}

export default Splash;
