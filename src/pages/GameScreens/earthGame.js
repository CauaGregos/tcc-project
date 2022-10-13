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



  const logout = () => {
    setLogado(false);
    navigate.navigate("Singin");
  };


  // ver se a fase que chega como parametro ja foi completa
  const isCompleted =(parms) =>{
    const resp = SourceQuestions((parms)-1,'Earth');
    if (resp.reqProgres!==null && resp.reqProgres !== undefined) {
      const progresso = resp.reqProgres;
      
      if (progress > progresso){
      return true;
      }else return false;
      
    }
  }

  const updateDate = async () =>  {
    AsyncStorage.getItem('@state').then((e) => {
      const data = JSON.parse(e);
      setStartedNow(data.startedNow);
    });

     AsyncStorage.getItem('@User').then((e) => {
      const data = JSON.parse(e);
      setEmail(data.email);
      
    });
     axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/earth").then((res) => {
      const data = res.data;
      setProgress(data[0].progresso);
    })
    .catch((err) => {});
  }
  
// ao entrar na fase, fazer a req do nivel necessario
  const enter = (parms) => {
    const resp = SourceQuestions((parms)-1,'Earth');
    if (resp.reqProgres!==null && resp.reqProgres !== undefined) {
      const progresso = resp.reqProgres;
      console.log(progresso);
      if (progress == progresso){
      
      navigate.navigate('Levels',{question:parms,planet:'Earth'})
      }
    }
  };

  const Buttons = (parms) => {
    
    return (
      <TouchableOpacity style={parms.style} onPress={e => enter(parms.level)}>
        <Image source={require("../assets/BotaoTerra.png")}></Image>
      </TouchableOpacity>
    )
  }

  const ButtonsCompleted = (parms) => {
    return (
      <TouchableOpacity style={parms.style}>
        <Image source={require("../assets/iconCheck.png")}></Image>
      </TouchableOpacity>
    )
  }

  updateDate();
  return (
    <View>
      {plataforma == "ios" ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/earthGame.png")}
            style={styles.IOSearthGame}
          ></Image>
          {!isCompleted(1) ? <Buttons style={stylesIOS.ButtonOne} level={1}/> : <ButtonsCompleted style={stylesIOS.ButtonOne}/>}
           {!isCompleted(4) ? <Buttons style={stylesIOS.ButtonTwo} level={4}/> : <ButtonsCompleted style={stylesIOS.ButtonTwo}/>}
           {!isCompleted(7) ? <Buttons style={stylesIOS.ButtonThree} level={7}/> : <ButtonsCompleted style={stylesIOS.ButtonThree}/>}
           {!isCompleted(10) ? <Buttons style={stylesIOS.ButtonFour} level={10}/> : <ButtonsCompleted style={stylesIOS.ButtonFour}/>}
           {!isCompleted(13) ? <Buttons style={stylesIOS.ButtonFive} level={13}/> : <ButtonsCompleted style={stylesIOS.ButtonFive}/>}
           {!isCompleted(16) ? <Buttons style={stylesIOS.ButtonSix} level={16}/> : <ButtonsCompleted style={stylesIOS.ButtonSix}/>}
           {!isCompleted(19) ? <Buttons style={stylesIOS.ButtonSeven} level={19}/> : <ButtonsCompleted style={stylesIOS.ButtonSeven}/>}
           {!isCompleted(22) ? <Buttons style={stylesIOS.ButtonEight} level={22}/> : <ButtonsCompleted style={stylesIOS.ButtonEight}/>}
           {!isCompleted(25) ? <Buttons style={stylesIOS.ButtonNine} level={25}/> : <ButtonsCompleted style={stylesIOS.ButtonNine}/>}
           {!isCompleted(28) ? <Buttons style={stylesIOS.ButtonTen} level={28}/> : <ButtonsCompleted style={stylesIOS.ButtonTen}/>}
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} >
          <Image
            source={require("../assets/earthGame.png")}
            style={styles.ANDROIDearthGame}
          ></Image>
           {!isCompleted(1) ? <Buttons style={stylesAndroid.ButtonOne} level={1}/> : <ButtonsCompleted style={stylesAndroid.ButtonOne}/>}
           {!isCompleted(4) ? <Buttons style={stylesAndroid.ButtonTwo} level={4}/> : <ButtonsCompleted style={stylesAndroid.ButtonTwo}/>}
           {!isCompleted(7) ? <Buttons style={stylesAndroid.ButtonThree} level={7}/> : <ButtonsCompleted style={stylesAndroid.ButtonThree}/>}
           {!isCompleted(10) ? <Buttons style={stylesAndroid.ButtonFour} level={10}/> : <ButtonsCompleted style={stylesAndroid.ButtonFour}/>}
           {!isCompleted(13) ? <Buttons style={stylesAndroid.ButtonFive} level={13}/> : <ButtonsCompleted style={stylesAndroid.ButtonFive}/>}
           {!isCompleted(16) ? <Buttons style={stylesAndroid.ButtonSix} level={16}/> : <ButtonsCompleted style={stylesAndroid.ButtonSix}/>}
           {!isCompleted(19) ? <Buttons style={stylesAndroid.ButtonSeven} level={19}/> : <ButtonsCompleted style={stylesAndroid.ButtonSeven}/>}
           {!isCompleted(22) ? <Buttons style={stylesAndroid.ButtonEight} level={22}/> : <ButtonsCompleted style={stylesAndroid.ButtonEight}/>}
           {!isCompleted(25) ? <Buttons style={stylesAndroid.ButtonNine} level={25}/> : <ButtonsCompleted style={stylesAndroid.ButtonNine}/>}
           {!isCompleted(28) ? <Buttons style={stylesAndroid.ButtonTen} level={28}/> : <ButtonsCompleted style={stylesAndroid.ButtonTen}/>}
        </ScrollView>
      )}
    </View>
  );
};

export default EarthGame;
