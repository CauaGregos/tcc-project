import { useNavigation,StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing,Image,Modal,TouchableOpacity, Text,Platform } from 'react-native';
import { View, BackHandler } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashBLevel = (props) => {

  const navigate = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))
  const size = Dimensions.get('window').width
  const axios = require('axios');
  const [email, setEmail] = useState('');


  AsyncStorage.getItem('@User').then((e) => {
    try{
      const data = JSON.parse(e);
    setEmail(data.email);
  }catch(e){}
  });



  const nextLevel = () => {
   
    if((props.route.params?.question-1)%3==0){
    
      axios.put('https://app-tc.herokuapp.com/upgradeProgress',{progress:10,email:email,planet:String(props.route.params?.planet).toLowerCase()}).then((res) => {}).catch((err) => {});
      navigate.navigate('NavigationPlanets');
      
    }else
    navigate.navigate('Levels',{question:props.route.params?.question,planet:props.route.params?.planet});
  }

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true
    }).start();
  }, [])
  return (
    <View style={styles.container}>   
        <View style={styles.container}>         
          <LottieView style={{ width:size,height: 150, top: '100%',alignSelf: 'center' }}
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
