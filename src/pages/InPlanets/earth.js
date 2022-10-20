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
import Header from "../../components/Header";
import styles from "./style";
import * as Animatable from 'react-native-animatable';
import Notify from "../../components/Notify";
const Earth = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const plataforma = Platform.OS;
  const [notify,setNotify] = useState(true);
  const [animation,setAnimation] = useState('fadeInUp');
  const navigacaoFase = useNavigation();



  const navigate = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setNotify(false);
      }, 2000);
    }, 5000);
    
  },[])
 

  return (
    <View>
      {/* <LottieView
        style={styles.animatedBackground}
        source={require("../assets/background.json")}
        loop={true}
        autoPlay
      /> */}
      <Image style={styles.animatedBackground} source={require('../assets/backgroundBi.png')}/>
      
      <Header planet="Mars" actualplanet="Earth" oldplanet="Neptune" />

      {plataforma == "ios" ? (
        <TouchableOpacity onPress={() => navigacaoFase.navigate("EarthGame")} style={{bottom:"13%"}}>
          <LottieView
          style={styles.IOSearth}
          source={require("../assets/terra.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigacaoFase.navigate("EarthGame")} style={{bottom:"10%"}}>
          <LottieView
          style={styles.ANDROIDearth}
          source={require("../assets/terra.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
        
      )}

      {notify && <Notify mensage={'Olá viajante, tente focar ao maximo na sua missão, desative as notificações do seu aparelho. :)'}/>}
  
    </View>
  );
};

export default Earth;
