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
import stylesIOS from "./styleIOS";

const EarthGame = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const plataforma = Platform.OS;

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
      {plataforma == "ios" ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/earthGame.png")}
            style={styles.IOSearthGame}
          ></Image>
          <TouchableOpacity style={stylesIOS.ButtonOne} onPress={e=> navigate.navigate('Levels',{question:1})}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonTwo}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonThree}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonFour}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonFive}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonSix}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonSeven}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonEight}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonNine}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesIOS.ButtonTen}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} >
          <Image
            source={require("../assets/earthGame.png")}
            style={styles.ANDROIDearthGame}
          ></Image>
          <TouchableOpacity style={stylesAndroid.ButtonOne} onPress={e=> navigate.navigate('Levels',{question:1})}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonTwo}onPress={e=> navigate.navigate('Levels',{question:2})}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonThree} onPress={e=> navigate.navigate('Levels',{question:3})}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonFour}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonFive}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonSix}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonSeven}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonEight}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonNine}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonTen}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default EarthGame;
