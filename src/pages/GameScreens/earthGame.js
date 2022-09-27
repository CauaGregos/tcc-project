import React from "react";
import {
  Dimensions,
  Platform,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";
import stylesAndroid from "./styleAndroid";

const EarthGame = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const plataforma = Platform.OS;

  const navigate = useNavigation();
  console.log(props.route.params?.object);
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
      {plataforma == "ios" ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/earthGame.png")}
            style={styles.IOSearthGame}
          ></Image>
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} >
          <Image
            source={require("../assets/earthGame.png")}
            style={styles.ANDROIDearthGame}
          ></Image>
          <TouchableOpacity style={stylesAndroid.ButtonOne}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonTwo}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonThree}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonFour}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonFive}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonSix}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonSeven}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonEight}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonNine}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonTen}>
            <Image source={require("../assets/BotaoFase.png")}></Image>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default EarthGame;
