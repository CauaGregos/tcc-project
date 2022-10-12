import { useNavigation,StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing,Image,Modal,TouchableOpacity, Text,Platform } from 'react-native';
import { View, BackHandler } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';


const SplashBLevel = (props) => {

  const navigate = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))
  const size = Dimensions.get('window').width

  const nextLevel = async () => {
    if((props.route.params?.question-1)%3==0){
      navigate.navigate(`${props.route.params?.planet}`);
    }else
    navigate.navigate('Levels',{question:props.route.params?.question});
  }

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start();
  }, [])
  return (
    <View style={styles.container}>
      
        <View style={styles.container}>
           <Animatable.Image
            delay={500}
            animation="flipInX"
            source={require('../assets/logoPlanetWhite.png')}
            style={styles.containerLogo}
            resizeMode="contain"
          />
          <LottieView style={{ width:size,height: 150, top: '-10%',alignSelf: 'center' }}
            source={require('../assets/loopPlanet.json')}
            progress={animationProgress.current}
            onAnimationFinish={() => nextLevel()}
            loop={false}
            autoPlay
          />
        </View>
    </View>

    

  );
}

export default SplashBLevel;
