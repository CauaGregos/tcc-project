/*Ao importar esse componente deverá prestar a atenção no momento certo de descarta-lo da tela*/


import React from "react";
import {
  View,
  Dimensions,
  Platform,
  TouchableOpacity,Image,Text
} from "react-native";
import { useState, useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import LottieView from "lottie-react-native";
const NotifyConfetti = (props) => {

  const [animation,setAnimation] = useState('fadeInUp');
  const [stop,setStop]= useState('');
  const [stopAnimation,setAnimationStop] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation('fadeOutDown');
     
      setTimeout(() => {
        setStop('fadeOut');
        setAnimationStop(false);
      },1000);
    }, 5000);
    
  },[])
 

  return (   
    <Animatable.View animation={stop} style={{bottom:'45%'}}>
      { stopAnimation && <>
        <Animatable.Image animation={animation} style={{alignSelf:'flex-end',zIndex:3,left:30}} source={require('../pages/assets/robot.png')}/>
        <Animatable.View animation={animation} style={{bottom:380,alignSelf:'center',height:90,padding:7,zIndex:3,backgroundColor:'#fff',width:350,borderRadius:38}}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'justify'}} >{props.mensage}</Text>
        </Animatable.View>
        <LottieView
          style={{zIndex:1,scaleX:1.2,scaleY:1.2,marginBottom:30}}
          source={require("../pages/assets/confetti.json")}
          loop={false}
          duration={6000}
          autoPlay
        />
        </>}
    </Animatable.View>
  );
};

export default NotifyConfetti;
