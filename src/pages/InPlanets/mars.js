import React from "react";
import { View, Dimensions, Platform, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Mars = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const plataforma = Platform.OS;
  // logica de como 
  const [startedNow,setStartedNow] = useState(false);
  const navigacaoFase = useNavigation();
  const navigate = useNavigation();
  const [email,setEmail] = useState('');

  useEffect(() => {
      AsyncStorage.getItem('@state').then((e) => {
        const data = JSON.parse(e);
        setStartedNow(data.startedNow);
      });

      AsyncStorage.getItem('@User').then((e) => {
        const data = JSON.parse(e);
        setEmail(data.email);
      });
  }, []);

  const enterIPlanet = () => {
    axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/earth").then((res) => {
      const data = res.data;
      
      if(data[0].progresso == 100){
        navigacaoFase.navigate("MarsGame")
      }
      else alert("Você precisa completar o planeta anterior, desvende-o agora !!")
    })
  };

  return (
    <View>
      <LottieView
        style={styles.animatedBackground}
        source={require("../assets/background.json")}
        loop={true}
        autoPlay
      />

      <Header planet="Neptune" actualplanet="Mars" oldplanet="Earth" />

      {plataforma == "ios" ? (
        <TouchableOpacity disabled={startedNow} onPress={() => enterIPlanet()} style={{bottom:"15%"}}>
          <LottieView
          style={styles.IOSmars}
          source={require("../assets/marte.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={startedNow} onPress={() => enterIPlanet()} style={{bottom:"10%"}}>
          <LottieView
          style={styles.ANDROIDmars}
          source={require("../assets/marte.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
      )}

      {plataforma == "ios" ? (
        <LottieView
          style={styles.IOSrocket}
          source={require("../assets/rocketPurple.json")}
          loop={true}
          autoPlay
        />
      ) : (
        <LottieView
          style={styles.ANDROIDrocket}
          source={require("../assets/rocketPurple.json")}
          loop={true}
          autoPlay
        />
      )}
    </View>
  );
};

export default Mars;
