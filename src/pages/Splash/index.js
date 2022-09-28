import { useNavigation,StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing,Image,Modal,TouchableOpacity, Text,Platform } from 'react-native';
import { View, BackHandler } from 'react-native';
import styles from './style';
import stylesModal from './styleModal';
import Logo from '../assets/logo.png';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

  const navegar = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))
  const size = Dimensions.get('window').width
  const [animStoped, setanimStoped] = useState(true);

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@User');
    user ? navegar.dispatch(StackActions.replace('Home',{user:user})): setanimStoped(true);
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
       
        {
          !animStoped ?
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
            onAnimationFinish={() => checkLogin()}
            loop={false}
            autoPlay
          />
        </View>
      : <Animatable.View animation={'fadeIn'} style={stylesModal.container}>
         <Animatable.Image
            delay={500}
            animation="flipInX"
            source={require('../assets/logoPlanetWhite.png')}
            style={styles.containerLogo}
            resizeMode="contain"
        />
         <Animatable.Image
            delay={1000}
            animation="flipInX"
            source={require('../assets/logo.png')}
            style={styles.containerLogo2}
            resizeMode="contain"
        />
            <TouchableOpacity style={stylesModal.button1} onPress={()=>{navegar.dispatch(StackActions.replace('Singin'))}}>
                        <Text style={stylesModal.buttonText}>Começar agora!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesModal.button2} onPress={()=>{navegar.dispatch(StackActions.replace('Singin'))}}>
                        <Text style={stylesModal.buttonText2}> Fazer o login</Text>
            </TouchableOpacity>
        </Animatable.View>
        }
     
    </View>

    

  );
}

export default Splash;
