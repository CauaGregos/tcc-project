import React from "react";
import {
  View,
  Dimensions,
  Platform,
  TouchableOpacity,Image,Text
} from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';


const Earth = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const plataforma = Platform.OS;
  const [notify,setNotify] = useState(true);
  const [animation,setAnimation] = useState('fadeInUp');
  const navigacaoFase = useNavigation();


  return (
    <Animatable.View animation={'fadeInUp'}>
      {plataforma == "ios" ? (
        <TouchableOpacity onPress={() => navigacaoFase.navigate("SplashRocket",{screen:'EarthGame'})} style={{bottom:"13%"}}>
          <LottieView
          style={props.IOSearth}
          source={require("../pages/assets/terra.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigacaoFase.navigate("SplashRocket",{screen:'EarthGame'})} style={{bottom:"10%"}}>
          <LottieView
          style={props.ANDROIDearth}
          source={require("../pages/assets/terra.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
        
      )}
    </Animatable.View>
  );
};

export default Earth;
