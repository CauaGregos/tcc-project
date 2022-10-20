import React from "react";
import { View, Dimensions, Platform, TouchableOpacity,Image } from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as Animatable from 'react-native-animatable';
const Neptune = (props) => {
  const axios = require("axios");
  const plataforma = Platform.OS;
  const [startedNow,setStartedNow] = useState(false);
  const navigacaoFase = useNavigation();
  const [email,setEmail] = useState('');
  const [blocked,setBlocked] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@state').then((e) => {
      try{
        const data = JSON.parse(e);
    setStartedNow(data.startedNow!=null?data.startedNow:false);
    }catch(e){}
    });

    AsyncStorage.getItem('@User').then((e) => {
      try{
        const data = JSON.parse(e);
      setEmail(data.email);
    }catch(e){}
      
    });

    
}, []);

  return (
    <Animatable.View animation={'fadeInUp'}>
      {plataforma == "ios" ? (
        <TouchableOpacity onPress={() => navigacaoFase.navigate("MarsGame")} style={{bottom:"13%"}}>
          <LottieView
          style={props.IOSearth}
          source={require("../pages/assets/netuno.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigacaoFase.navigate("MarsGame")} style={{bottom:"10%"}}>
          <LottieView
          style={props.ANDROIDearth}
          source={require("../pages/assets/netuno.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
        
      )}
       
    </Animatable.View>
  );
};

export default Neptune;
