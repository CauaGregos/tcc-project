import React from "react";
import { View, Dimensions, Platform, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Neptune = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const plataforma = Platform.OS;
  const [startedNow, setStartedNow] = useState(true);
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

      AsyncStorage.getItem('@state').then((e) => {
        const data = JSON.parse(e);
        setStartedNow(data.startedNow);
      });

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

      <Header planet="Earth" actualplanet="Neptune" oldplanet="Mars" />

      {plataforma == "ios" ? (
        <TouchableOpacity disabled={startedNow} style={{bottom:"15%"}}>
          <LottieView
          style={styles.IOSneptune}
          source={require("../assets/netuno.json")}
          loop={true}
          autoPlay
        />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={startedNow} style={{bottom:"10%"}}>
          <LottieView
          style={styles.ANDROIDneptune}
          source={require("../assets/netuno.json")}
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

export default Neptune;
