import { useNavigation,StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image } from 'react-native';
import { View } from 'react-native';
import styles from './style';


const SplashRocket = (props) => {

  const navegar = useNavigation()
  const animationProgress = useRef(new Animated.Value(0))
  const size = Dimensions.get('window').width
  const [animStoped, setanimStoped] = useState(false);



  useEffect(() => {
    
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start();
    console.log(props.route.params?.screen)
  }, [])


  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.animatedBackground} source={require('../assets/backgroundBi.png')}/>
          <LottieView style={{ width:'100%',height: '120%',bottom:120,alignSelf: 'center',scaleX:1.2,scaleY:1.2 }}
            source={require('../assets/splashRocket.json')}
            progress={animationProgress.current}
            
            onAnimationFinish={e => navegar.dispatch(StackActions.replace(props.route.params?.screen))}
            loop={false}
            autoPlay
          />
        </View>
    </View>

    

  );
}

export default SplashRocket;
