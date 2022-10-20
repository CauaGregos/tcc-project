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

const Notify = (props) => {

  const [animation,setAnimation] = useState('fadeInUp');
  const [stop,setStop]= useState('');

  useEffect(() => {
    setTimeout(() => {
      setAnimation('fadeOutDown');
      setTimeout(() => {
        setStop('fadeOut');
      },1000);
    }, 5000);
    
  },[])
 

  return (   
    <Animatable.View animation={stop} style={{bottom:1600}}>
        <Animatable.Image animation={animation} style={{alignSelf:'flex-end',zIndex:3,left:30}} source={require('../pages/assets/robot.png')}/>
        <Animatable.View animation={animation} style={{bottom:320,zIndex:3,backgroundColor:'#fff',width:200,borderRadius:13,borderBottomRightRadius:1}}>
        <Text style={{fontSize:20,fontWeight:'bold'}} >{props.mensage}</Text>
        </Animatable.View>
        <View style={{position:'absolute',backgroundColor:'#000000ab',bottom:0,width:'100%',height:'250%',zIndex:1}}/>
    </Animatable.View>
  );
};

export default Notify;
