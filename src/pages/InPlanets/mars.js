import React, { useRef } from 'react';
import {View, BackHandler, Dimensions, Platform,Touchable, Pressable, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import styles from './style';




const Mars = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const width = Dimensions.get('screen').width;
    const plataforma = Platform.OS
   
    const navigate = useNavigation()
  
      useEffect(()=>{
        axios.get('https://app-tc.herokuapp.com/alunos')
          .then(res =>{
              const data = res.data
              for(let i = 0; i<data.length; i++){
                
                setAlunos(data[i]);
            }
          })
          .catch(err =>{
            
          })
      },[])


      const logout = () =>{
        setLogado(false)
        navigate.navigate('Singin')
      }

      

    return (
        
        <View>

          <LottieView style={{width:width, scaleX:1.3,scaleY:1.3, backgroundColor:'#241d28'}}
            source={require('../assets/background.json')}
            loop={true}
            autoPlay
          />
          
          <Header planet='Neptune' actualplanet = 'Mars'  oldplanet='Earth'/>
           

          { 
         plataforma == 'ios' ?
         <LottieView style={{top:'-13%', width:'125%', alignSelf: 'center'}}
          source={require('../assets/marte.json')}
          loop={true}
          autoPlay
          /> :
          <LottieView style={{top:'-20%', width:'300%', alignSelf: 'center' }}
          source={require('../assets/marte.json')}
          loop={true}
          autoPlay
          />}

          {plataforma == 'ios' ?
            <LottieView style={{top:'-46%', alignSelf: 'center', width:150}}
            source={require('../assets/rocketPurple.json')}
            loop={true}
            autoPlay
            />
            :
            <LottieView style={{top:'-67%', alignSelf: 'center', width:150}}
          source={require('../assets/rocketPurple.json')}
          loop={true}
          autoPlay
          />}

          
           
        </View>

      
        

        
    );
}


export default Mars;