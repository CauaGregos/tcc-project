import React from "react";
import { View, Dimensions, Platform, TouchableOpacity,Image,Text } from "react-native";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Earth from "../../components/earth";
import Mars from "../../components/mars";
import Neptune from "../../components/neptune";

const NavigationPlanets = (props) => {
  const axios = require("axios");
  const plataforma = Platform.OS;
  const [startedNow,setStartedNow] = useState(false);
  const navigacaoFase = useNavigation();
  const [email,setEmail] = useState('');
 const [index,setIndex] = useState(0);
  const [blocked,setBlocked] = useState(false);

  let allplanets = [<Earth ANDROIDearth={styles.ANDROIDearth} IOSearth={styles.IOSearth}/>, 
  <Mars ANDROIDearth={styles.ANDROIDmars} IOSearth={styles.IOSmars}/>, <Neptune ANDROIDearth={styles.ANDROIDneptune} IOSearth={styles.IOSneptune}/> ]
  let namePlanet = ['earth', 'mars', 'neptune']
  let title = ['Earth', 'Mars', 'Neptune']
  const resetNavigate = () => {
    setIndex(0);
  }

  

  useEffect(() => {
      AsyncStorage.getItem('@state').then((e) => {
        try{
          const data = JSON.parse(e);
      setStartedNow(data.startedNow!=null?data.startedNow:false);
      }catch(e){}
      });

      AsyncStorage.getItem('@User').then((e) => {
    
        try{
          const data = JSON.parse(e);
          setEmail(data.email!= null?data.email:'');
      }catch(e){}
        
      });
      if(startedNow){
      namePlanet[index] == 'mars'||namePlanet[index] == 'neptune' ?setBlocked(true):setBlocked(false);
     
      }
  }, [index]);

   { !startedNow && axios.get("https://app-tc.herokuapp.com/getProgress/"+email+"/"+namePlanet[index-1]).then((res) => {
      const data = res.data;
      
      if(data[0].progresso == 100){
        return setBlocked(false);
      }
      else { return setBlocked(true);}
      
    }).catch(err =>{
      setBlocked(false);
    })
  }
    const Header = () => {
        return(
        <View style={{position:'absolute',backgroundColor: '#0D0D0D',alignSelf: 'center',top:50,width: '90%',height: 50,borderRadius: 20,zIndex:2}}>
            <TouchableOpacity onPress={() => setIndex(index-1)}>
            <Image style={{left: 10,alignSelf: 'flex-start',top: "30%"}} source={require('../assets/buttonArrowleft.png')}></Image>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => setIndex(index+1)}>
            <Image style={{right: 10,alignSelf: 'flex-end',top: "-65%"}} source={require('../assets/buttonArrow.png')}></Image>
            </TouchableOpacity> 
            <Text style={{ fontSize: 25,color: '#fff',alignSelf: 'center',top: "-100%",}}>{title[index]}</Text>
        </View>
        )
        
    };


  return (
    <View>
       <Image style={styles.animatedBackground} source={require('../assets/backgroundBi.png')}/>

      <Header/>
      {allplanets[index] == null?resetNavigate():allplanets[index]}
      
      {blocked && <View style={{flex:1,position:'absolute',backgroundColor:'#5a5a5a50',width:'100%',height:'100%',zIndex:1}}>
      <FontAwesome5 name="lock" style={{alignSelf:'center',top:'20%'}} size={70} color="#848484" />
       </View>
      }
      
    </View>
  );
};

export default NavigationPlanets;
