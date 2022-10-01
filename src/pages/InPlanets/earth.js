import React from "react";
import {
  View,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";

import styles from "./style";

const Earth = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const plataforma = Platform.OS;

  const navigacaoFase = useNavigation();



  const navigate = useNavigation();
 
  useEffect(() => {
    axios
      .get("https://app-tc.herokuapp.com/alunos")
      .then((res) => {
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          setAlunos(data[i]);
        }
      })
      .catch((err) => {});
  }, []);

  const logout = () => {
    setLogado(false);
    navigate.navigate("Singin");
  };

  return (
    <View>
      <LottieView
        style={styles.animatedBackground}
        source={require("../assets/background.json")}
        loop={true}
        autoPlay
      />

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

export default Earth;
