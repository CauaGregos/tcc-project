import React from "react";
import {
  Dimensions,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";
import stylesAndroid from "./styleAndroid";
import stylesIOS from "./styleIOS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SourceQuestions from "../../components/SrcQuestions";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const MarsGame = (props) => {
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



  // ver se a fase que chega como parametro ja foi completa
  const isCompleted =(parms) =>{
    const resp = SourceQuestions(parms,'Mars');
    if (resp.reqProgres!==null && resp.reqProgres !== undefined) {
      const progresso = resp.reqProgres;
      
      if (progress > progresso){
      return true;
      }else return false;
      
    }
  }

  const isLevelAtual = (parms) => {
    const resp = SourceQuestions(parms,'Mars');
   
    if (resp.reqProgres!==null && resp.reqProgres !== undefined) {
      const progresso = resp.reqProgres;
      
      if (progress == progresso){
       
      return true;
      }
      return false;
    }
    
  };

  

  const updateDate = async () =>  {

     AsyncStorage.getItem('@User').then((e) => {
      try{
        const data = JSON.parse(e);
      setEmail(data.email);
    }catch(e){}
      
    });
     axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/mars").then((res) => {
      const data = res.data;
      setProgress(data[0].progresso);
    })
    .catch((err) => {});
  }
  
// ao entrar na fase, fazer a req do nivel necessario
  const enter = (parms) => {
    const resp = SourceQuestions(parms,'Mars');
    if (resp.reqProgres!==null && resp.reqProgres !== undefined) {
      const progresso = resp.reqProgres;
   
      if (progress == progresso){
      
      navigate.navigate('Levels',{question:parms,planet:'Mars'})
      }
    }
  };

  const Buttons = (parms) => {
    
    return (
      <TouchableOpacity style={parms.style}>
        <Image source={require("../assets/BotaoMarte.png")}></Image>
      </TouchableOpacity>
    )
  }

  const ButtonActual = (parms) => {
    
    return (
      <TouchableOpacity style={parms.style} onPress={e => enter(parms.level)}>
        <Image source={require("../assets/levelActual.png")}></Image>
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
  const renderOptions = (level,style,styleCheck,styleActual) => {
  
    
    if(isCompleted(level)){
      return(<ButtonsCompleted style={styleCheck}/>);
    } 

    if(isLevelAtual(level)){
      return (<ButtonActual style={styleActual} level={level}/>);
    }
    else{
      return (<Buttons style={style} level={level}/>);
    }
    
  };

  AsyncStorage.getItem('@state').then((e) => {
    try{
      const data = JSON.parse(e);
  setStartedNow(data.startedNow!=null?data.startedNow:false);
  }catch(e){}
  });
  return (
    <Animatable.View animation={'rubberBand'}>
      {plataforma == "ios" ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/marsGame.png")}
            style={styles.IOSearthGame}
          ></Image>
          <TouchableOpacity style={{top: 30,right: "90.5%",position: "absolute" }} onPress={e=>navigate.navigate('NavigationPlanets')}>
          <FontAwesome5 name="caret-left" size={70} color="#fff" />
          </TouchableOpacity>
          {renderOptions(1,stylesIOS.ButtonOne,stylesIOS.ButtonOneCheck)}
          {renderOptions(4,stylesIOS.ButtonTwo,stylesIOS.ButtonTwoCheck)}
          {renderOptions(7,stylesIOS.ButtonThree,stylesIOS.ButtonThreeCheck)}
          {renderOptions(10,stylesIOS.ButtonFour,stylesIOS.ButtonFourCheck)}
          {renderOptions(13,stylesIOS.ButtonFive,stylesIOS.ButtonFiveCheck)}
          {renderOptions(16,stylesIOS.ButtonSix,stylesIOS.ButtonSixCheck)}
          {renderOptions(19,stylesIOS.ButtonSeven,stylesIOS.ButtonSevenCheck)}
          {renderOptions(22,stylesIOS.ButtonEight,stylesIOS.ButtonEightCheck)}
          {renderOptions(25,stylesIOS.ButtonNine,stylesIOS.ButtonNineCheck)}
          {renderOptions(28,stylesIOS.ButtonTen,stylesIOS.ButtonTenCheck)}
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} >
          <Image
            source={require("../assets/marsGame.png")}
            style={styles.ANDROIDearthGame}
          ></Image>
          <TouchableOpacity style={{top: 30,right: "90.5%",position: "absolute" }} onPress={e=>navigate.navigate('NavigationPlanets')}>
          <FontAwesome5 name="caret-left" size={70} color="#fff" />
          </TouchableOpacity>
          {renderOptions(1,stylesAndroid.ButtonOne,stylesAndroid.ButtonOneCheck,stylesAndroid.ButtonOneActual)}
          {renderOptions(4,stylesAndroid.ButtonTwo,stylesAndroid.ButtonTwoCheck,stylesAndroid.ButtonTwoActual)}
          {renderOptions(7,stylesAndroid.ButtonThree,stylesAndroid.ButtonThreeCheck,stylesAndroid.ButtonThreeActual)}
          {renderOptions(10,stylesAndroid.ButtonFour,stylesAndroid.ButtonFourCheck,stylesAndroid.ButtonFourActual)} 
          {renderOptions(13,stylesAndroid.ButtonFive,stylesAndroid.ButtonFiveCheck,stylesAndroid.ButtonFiveActual)}
          {renderOptions(16,stylesAndroid.ButtonSix,stylesAndroid.ButtonSixCheck,stylesAndroid.ButtonSixActual)}
          {renderOptions(19,stylesAndroid.ButtonSeven,stylesAndroid.ButtonSevenCheck,stylesAndroid.ButtonSevenActual)}
          {renderOptions(22,stylesAndroid.ButtonEight,stylesAndroid.ButtonEightCheck,stylesAndroid.ButtonEigthActual)}
          {renderOptions(25,stylesAndroid.ButtonNine,stylesAndroid.ButtonNineCheck,stylesAndroid.ButtonNineActual)}
          {renderOptions(28,stylesAndroid.ButtonTen,stylesAndroid.ButtonTenCheck,stylesAndroid.ButtonTenActual)}
        </ScrollView>
      )}
    </Animatable.View>
  );
};

export default MarsGame;
