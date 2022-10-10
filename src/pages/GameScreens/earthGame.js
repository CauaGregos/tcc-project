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
import AsyncStorage from "@react-native-async-storage/async-storage";
import SourceQuestions from "../../components/SrcQuestions";

const EarthGame = (props) => {
  const [alunos, setAlunos] = useState([]);
  const axios = require("axios");
  const [logado, setLogado] = useState([true]);
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const [progress,setProgress] = useState('');
  const [email,setEmail] = useState('');
  const [startedNow, setStartedNow] = useState(false);
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

      AsyncStorage.getItem('@state').then((e) => {
        const data = JSON.parse(e);
        setStartedNow(data.startedNow);
      });

      AsyncStorage.getItem('@User').then((e) => {
        const data = JSON.parse(e);
        setEmail(data.email);
        
      });
      axios
      .get("https://app-tc.herokuapp.com/getProgress/"+email+"/earth")
      .then((res) => {
        const data = res.data;
      setProgress(data.progresso);
      })
      .catch((err) => {});
  }, []);

  const logout = () => {
    setLogado(false);
    navigate.navigate("Singin");
  };

  const enter = (parms) => {
    const resp = SourceQuestions((parms)-1);
    
    if (resp.reqProgres!==null && resp.reqProgres !== undefined) {
      const progresso = resp.reqProgres;
      if (progress == progresso){
      navigate.navigate('Levels',{question:parms})
      }
    }
    else alert('Você não possui nivel suficiente')
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
          <TouchableOpacity style={stylesAndroid.ButtonOne} onPress={e=> enter(1)}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonTwo}onPress={e=> enter(2)}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonThree} onPress={e=> enter(3)}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonFour}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={stylesAndroid.ButtonFive}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity disabled={startedNow} style={stylesAndroid.ButtonSix}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity disabled={startedNow} style={stylesAndroid.ButtonSeven}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity disabled={startedNow} style={stylesAndroid.ButtonEight}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity disabled={startedNow} style={stylesAndroid.ButtonNine}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity disabled={startedNow} style={stylesAndroid.ButtonTen}>
            <Image source={require("../assets/BotaoTerra.png")}></Image>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default EarthGame;
