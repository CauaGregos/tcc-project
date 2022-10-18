import React from "react";
import { View, Dimensions, Platform, TouchableOpacity,Image } from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Mars = (props) => {
  const axios = require("axios");
  const plataforma = Platform.OS;
  const [startedNow,setStartedNow] = useState(false);
  const navigacaoFase = useNavigation();
  const [email,setEmail] = useState('');
  const [blocked,setBlocked] = useState(false);

  useEffect(() => {
      AsyncStorage.getItem('@state').then((e) => {
        try{
          const data = JSON.parse(e);
      setStartedNow(data.startedNow!=null?data.startedNow:false);
      }catch(e){}
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

  axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/earth").then((res) => {
      const data = res.data;
      
      if(data[0].progresso == 100){
       setBlocked(false);
      }
      else setBlocked(true);
    }).catch(err =>{});

  return (
    <View>
      <TouchableOpacity style={{top: 30,right: "90.5%",position: "absolute" }} onPress={e=>navigacaoFase.goBack()}>
      <FontAwesome5 name="caret-left" size={70} color="#fff" />
      </TouchableOpacity>
      {/* <LottieView
        style={styles.animatedBackground}
        source={require("../assets/background.json")}
        loop={true}
        autoPlay
      /> */}
       <Image style={styles.animatedBackground} source={require('../assets/backgroundBi.png')}/>

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
     { blocked && <View style={{flex:1,position:'absolute',backgroundColor:'#5a5a5a50',width:'100%',height:'100%',zIndex:1}}>
     <FontAwesome5 name="lock" style={{alignSelf:'center',top:'20%'}} size={70} color="#848484" />
      </View>
     }
      {/* {plataforma == "ios" ? (
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
      )} */}
    </View>
  );
};

export default Mars;
