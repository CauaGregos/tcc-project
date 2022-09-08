import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing,Image } from 'react-native';
import { View, BackHandler } from 'react-native';



const SplashForgot = (props) => {
  // medidas de tamanho da tela em que o componente esta sendo renderizado
  const size = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  const navigate = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    })
  
  return (
    
       <View style = {{backgroundColor:'#ffffff'}}>
            <LottieView style={{ width: width, height: size, position:'absolute',backgroundColor:'#ffffff' }}
                source={require('../assets/animForgot.json')}
                progress={animationProgress.current}
                onAnimationFinish={() =>  navigate.navigate(props.route.params?.screen)}
                loop={false}
                autoPlay
               speed={2}
            />
      </View>

  );
}

export default SplashForgot;
