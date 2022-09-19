import React, { useRef } from 'react';
import {View, BackHandler, Dimensions, Touchable, Pressable,Text, Button, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Home = (props) => {

    const [alunos, setAlunos] = useState([]);
    const axios = require('axios');
    const [logado,setLogado] = useState([true]);
    const width = Dimensions.get('screen').width;
    const [test,setTest] = useState('');
    const interInPlanet = (planet) => {
       if(planet){
         navigate.navigate(planet);
       } 
    }
   
    const navigate = useNavigation()

      async function getData() {
        const teste = await AsyncStorage.getItem('@User')
        if (teste) {setTest(teste)}
        const data = JSON.parse(teste)
    
      }  


      useEffect(()=>{
        getData()
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
         
          <LottieView style={{position:'absolute',width:width,scaleX:1.3,scaleY:1.3,backgroundColor:'#241d28'}}
            source={require('../assets/background.json')}
            loop={true}
            autoPlay
          />  
          <View style={{top:'50%'}}>
          <TouchableOpacity onPress={()=> interInPlanet('Mars')} style={{ top:'45%' }}>
          <LottieView style={{width:'30%', left:'45%' }}
            source={require('../assets/marte.json')}
            loop={true}
            autoPlay
          />
          </TouchableOpacity>
        <TouchableOpacity onPress={()=> interInPlanet('Neptune')} style={{ top:'-60%', left: '8%' }} >
          <LottieView style={{width:'30%', left:'2%' }}
            source={require('../assets/netuno.json')}
            loop={true}
            autoPlay
          />
          </TouchableOpacity>
           <TouchableOpacity onPress={()=> interInPlanet('Earth')} style={{ top:'50%', left: '-55%' }}>
          <LottieView style={{width:'30%',alignSelf:'flex-end',right:'3%'}}
            source={require('../assets/terra.json')}
            loop={true}
            autoPlay
            speed={0.4}
          />
          </TouchableOpacity>
          </View>
        </View>        
    );
}


export default Home;